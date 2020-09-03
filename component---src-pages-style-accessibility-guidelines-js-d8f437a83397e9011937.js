(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"8C0Q":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),s=t("Bl7J"),o=t("VGxr"),c=t("OmYv"),i="Accessibility".toLowerCase();a.default=function(){return r.a.createElement(s.a,null,r.a.createElement("header",{className:"subnav"},r.a.createElement("h1",null,"Accessibility"),r.a.createElement(o.a,{pageName:i,sectionName:"style"})),r.a.createElement(c.a,null,r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("p",{className:"intro"},"Samaritan web products are built to be consistent, clean, and confident. This is achieved through accessible design, which allows members of all abilites to successfully navigate and interact with our UI."),r.a.createElement("h2",{className:"has-number has-number--one no-margin--top"},"Color"),r.a.createElement("p",null,"Color is an important design element used to highlight valuable information to our users. When used correctly, it allows users to quickly navigate the page and find what they're looking for."),r.a.createElement("div",null,r.a.createElement("h3",null,"Contrast Ratios"),r.a.createElement("p",null,"Color used within buttons, links, and navigation elements must pass the WCAG 2.1 AA rating for accessibility.")),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"grid x-accessibility-color-container"},r.a.createElement("div",{className:"grid--half x-accessibility-colorBlack"},r.a.createElement("div",{className:"space-between"},r.a.createElement("h2",null,"Light on Dark"),r.a.createElement("span",{className:"tag tag--no-link tag--solid tag--green"},"PASS")),r.a.createElement("p",null,"Light on Dark")),r.a.createElement("div",{className:"grid--half x-accessibility-colorWhite"},r.a.createElement("div",{className:"space-between"},r.a.createElement("h2",null,"Dark on Dark"),r.a.createElement("span",{className:"tag tag--no-link tag--solid tag--green"},"PASS")),r.a.createElement("p",null,"Dark on Light"))),r.a.createElement("div",{className:"grid x-accessibility-color-container mt-space-s"},r.a.createElement("div",{className:"grid--half x-accessibility-colorOffBlack"},r.a.createElement("div",{className:"space-between"},r.a.createElement("h2",null,"Light on Dark"),r.a.createElement("span",{className:"tag tag--no-link tag--solid tag--red"},"FAIL")),r.a.createElement("p",null,"Light on Dark")),r.a.createElement("div",{className:"grid--half x-accessibility-colorOffWhite"},r.a.createElement("div",{className:"space-between"},r.a.createElement("h2",null,"Dark on Dark"),r.a.createElement("span",{className:"tag tag--no-link tag--solid tag--red"},"FAIL")),r.a.createElement("p",null,"Dark on Light")))),r.a.createElement("blockquote",{className:"tips"},r.a.createElement("strong",null,"Tip: Understanding Web Content Accessibility Guidelines (WCAG)"),r.a.createElement("p",null,"WCAG 2.1 level AA standards require contrast ratios of 4.5:1 for normal text and 3:1 for large text. Level AAA require contrast ratios of 7:1 for normal text and 4.5:1 for large text. Use these helpful resources to learn more and test your designs:"),r.a.createElement("ul",{className:"tips-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",target:"_blank",rel:"noopener noreferrer"},"WCAG Standards")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://webaim.org/resources/contrastchecker/",target:"_blank",rel:"noopener noreferrer"},"Contrast Checker")))),r.a.createElement("div",null,r.a.createElement("h3",null,"Color Blindness"),r.a.createElement("p",null,"Don't rely on color alone to communicate important information to your user. Support key information with related icons and accurate messaging to ensure every user receives the same information.")),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",{className:"has-error"},r.a.createElement("label",{htmlFor:"password-error"},"Password"),r.a.createElement("input",{type:"password",id:"password-error",autocomplete:"off",value:"fdas"}),r.a.createElement("div",{className:"message"},r.a.createElement("i",{className:"dashing-icon dashing-icon--alert-filled"}),"The password you've entered isn't incorrect."))))),r.a.createElement("blockquote",{className:"tips"},r.a.createElement("strong",null,"Tip: Test Your Colors"),r.a.createElement("p",null,"Use accessiblity tools like ",r.a.createElement("a",{href:"https://michelf.ca/projects/sim-daltonism/",target:"_blank",rel:"noopener noreferrer"},"Sim Daltonism")," or ",r.a.createElement("a",{href:"https://github.com/oftheheadland/Colorblindly",target:"_blank",rel:"noopener noreferrer"},"Colorblindly")," to simulate how your designs can be affected by color blindness.")),r.a.createElement("h2",{className:"has-number has-number--two"},"Layout"),r.a.createElement("div",null,r.a.createElement("h3",null,"Mobile First"),r.a.createElement("p",null,"Samaritan products must be responsive and mobile-friendly. As of 2019, roughly 35% of our membership access the Dashboard from a touch device. For this reason, it is important that you offer a clean, consisent experience throughout every form factor. Utilize the ",r.a.createElement(l.a,{to:"/components/css-grid/code"},"CSS grid")," system built into the Paragon Framework to get a head start on designing a mobile first layout.")),r.a.createElement("h2",{className:"has-number has-number--three"},"Icons & Images"),r.a.createElement("div",null,r.a.createElement("h3",null,"Touch Targets"),r.a.createElement("p",null,"Paragon buttons and actions are designed for function. According to a study by the ",r.a.createElement("a",{href:"http://touchlab.mit.edu/publications/2003_009.pdf",target:"_blank",rel:"noopener noreferrer"},"MIT Touch Lab"),", the average width of a pointer finger equates to about 45-57 pixels. It is important that the size of interactive targets don't cause users to make touch errors. For this reason, interactive actions and icons have a touch target size of at least 34px.")),r.a.createElement("div",{className:"example-container"},r.a.createElement("fieldset",null,r.a.createElement("button",{className:"mr-space-m"},"Button"),r.a.createElement("button",{className:"button button--icon button--red mr-space-l"},r.a.createElement("i",{className:"dashing-icon dashing-icon--trash"})),r.a.createElement("div",{className:"checkbox--custom inline"},r.a.createElement("input",{type:"checkbox",id:"touch-target-checkbox",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"touch-target-checkbox"},"Checkbox")))),r.a.createElement("h2",{className:"has-number has-number--four"},"Language"),r.a.createElement("p",null,"When adding text to your app or website, pay careful attention to the size that it is displayed. Body text should be 16px - 18px in size, and labels should be no smaller than 12px. Using anything smaller can cause strain and frustration for your user."),r.a.createElement("blockquote",{className:"caution"},r.a.createElement("strong",null,"Caution: Don't Save Text as an Image"),r.a.createElement("p",null,"Displaying text as an image can cause pixelation and make sentences difficult to read. Additionally, this prevents screen readers from seeing and reading text to your user.")))))}}}]);
//# sourceMappingURL=component---src-pages-style-accessibility-guidelines-js-d8f437a83397e9011937.js.map