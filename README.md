# README
Takehome project to build a full-stack app that displays color swatches, and related color shades. I took the opportunity to improve my basic CSS skills, refresh myself on some NextJs syntax I'd forgotten, and generally have fun! I found I most enjoyed writing the logic, it was fun to see the related shades appear how I wanted on the first try. The styling was my weakest point, I made some early mistakes that took way too long to debug. 



# Planning doc:
## Components:

1. Header/Top Bar:

   - Logo: Link to "/"
   - Search Bar: Which will do something maybe (not).

2. LeftNav:

   - Random Color
     - Get random color page and redir to the DetailViewPage
   - List of basic colors
     - Links to basic color DetailViewPages OR ListViewPages filtered for that color
   - Responsive to a collapsed bar with an expand button (just use ">" for the icon)

3. ColorBoxItems:

   - Big box of the color, some shadow, white bottom with the color hex code displayed
   - Each Item is a Link to its DetailViewPage
   - Need height/width props / defaults

4. PageGrid:

   - Default: 3 rows, 4 cols
   - Responsive to 2x2

5. Page Selector:

   - Goes from 1 - max pages

6. Row:
   - Input: hex code string
   - display a row of 5 on desktop shinking on mobile
   - Calculate the different shades based on: helpers/adjustShade

## Pages:

1. Document:

   - Header/TopBar
   - LeftNav

1. ListViewPage:
   https://raw.githubusercontent.com/HelpfulHuman/interview-challenge/master/design/List%20View.png

   - PageGrid of ColorBoxItems

1. DetailViewPage
   https://raw.githubusercontent.com/HelpfulHuman/interview-challenge/master/design/Detail%20View.png
   - Main Large Color
