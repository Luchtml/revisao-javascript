class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links)
  }
}

const scroll = new SmoothScroll("a")

console.log(scroll.linkElements)