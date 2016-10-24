import { Directive, AfterViewInit, ElementRef, Renderer, Input, SimpleChange } from '@angular/core';

@Directive({
  selector: '[scrollable-tabs]',
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ScrollableTabs implements AfterViewInit {
  @Input('scrollable-tabs') selectedTabIndex: number = 1;

  tabbar: HTMLElement;

  constructor(public elemRef: ElementRef, public renderer: Renderer) {
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes['selectedTabIndex'].currentValue != changes['selectedTabIndex'].previousValue) {
      this.selectTab(changes['selectedTabIndex'].currentValue);
    }
  }

  ngAfterViewInit() {
    this.tabbar = this.elemRef.nativeElement.children["0"];

    this.setAnchorStyles();

    // set tabbar overflow-x: scroll
    this.renderer.setElementStyle(this.tabbar, "overflow-x", "scroll");

    // set tabbar overflow-y: hidden
    this.renderer.setElementStyle(this.tabbar, "overflow-y", "hidden");


    this.selectTab(this.selectedTabIndex);
  }

  onResize(event: Event) {
    this.setAnchorStyles();
    this.selectTab(this.selectedTabIndex);
  }

  setAnchorStyles() {
    let tabBar_width = this.tabbar.clientWidth;
    let numOfAnchors = this.tabbar.children.length - 1;
    let sumOfAnchorWidth = 0;

    for (let i = 0; i < numOfAnchors; i++) {
      let element = this.tabbar.children[i];
      // set <a> display: inline-table
      this.renderer.setElementStyle(element, 'display', 'inline-table');
      sumOfAnchorWidth += element.clientWidth;
    }

    let anchorWidth = tabBar_width / numOfAnchors;
    for (let i = 0; i < numOfAnchors; i++) {
      let element = this.tabbar.children[i];
      this.renderer.setElementStyle(element, 'width', anchorWidth + 'px');
    }
  }

  selectTab(tabIndex: number) {
    if (typeof this.tabbar != 'undefined') {
      let tabBar_width = this.tabbar.clientWidth;
      let selectedTab = this.tabbar.children[tabIndex - 1];
      let selectedTab_Width = selectedTab.clientWidth;
      let selectedTab_LeftOffset = document.getElementById(selectedTab.id).offsetLeft;
      let selectedTab_mid = selectedTab_LeftOffset + (selectedTab_Width / 2);
      let newScrollLeft = selectedTab_mid - (tabBar_width / 2);

      this.scrollXTo(newScrollLeft, 300).then(() => { });
    }
  }

  scrollXTo(x: number, duration: number = 300): Promise<any> {
    // scroll animation loop w/ easing
    let tabbar = this.tabbar;

    if (!tabbar) {
      // invalid element
      return Promise.resolve();
    }
    x = x || 0;

    let originalRaf = (window[window['Zone']['__symbol__']('requestAnimationFrame')] || window[window['Zone']['__symbol__']('webkitRequestAnimationFrame')]);
    let nativeRaf = originalRaf !== undefined ? originalRaf['bind'](window) : window.requestAnimationFrame.bind(window);
    let fromX = tabbar.scrollLeft;
    let maxAttempts = (duration / 16) + 100;

    return new Promise(resolve => {
      let startTime: number;
      let attempts = 0;
      let isPlaying: boolean;

      // scroll loop
      function step() {
        attempts++;

        if (!tabbar || !isPlaying || attempts > maxAttempts) {
          isPlaying = false;
          resolve();
          return;
        }

        let time = Math.min(1, ((Date.now() - startTime) / duration));

        // where .5 would be 50% of time on a linear scale easedT gives a
        // fraction based on the easing method
        let easedT = (--time) * time * time + 1;

        if (fromX !== x) {
          tabbar.scrollLeft = Math.floor((easedT * (x - fromX)) + fromX);
        }

        if (easedT < 1) {
          nativeRaf(step);
        } else {
          // done
          resolve();
        }
      }

      // start scroll loop
      isPlaying = true;

      // chill out for a frame first
      nativeRaf(() => {
        startTime = Date.now();
        nativeRaf(step);
      });

    });
  }


}
