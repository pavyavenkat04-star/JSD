# Introduction to CSS
- Cascading Style Sheets
- Use:To design a web page efficiently in a easy manner
- Invented by:W3C company (World Wide Consortium)
- year:1996 (level 1 dec 17)
- CSS was created by Hakon Wium Lie and Bert Bos.

*Types of CSS:*
1. Inline css   
    - applies unique styling rules directly within a specific HTML   element using the style attribute
    - Affects only the individual element where it is written.
2. Internal css 
    - Internal (or embedded) CSS defines styling rules inside a ```<style>``` block located within the ```<head>``` section of the HTML document.
    - Affects all matching elements across that entire single page
3. External css 
    - Stores all of the  design instructions in a completely separate file with a .css extension, linking it to the HTML document via a ```<link>``` tag

- Consider an element is given rules to be styled in inline,internal and external css.Here in this case, first the styles mentioned in inline css is applied.After this,the style which is mentioned most recently is applied.

- In case of id and a class,id is given first preference.