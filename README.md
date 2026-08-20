**Creator: Elijah David**

# Elijah David's Flash Cards

A small, responsive study-card project covering core JavaScript and jQuery concepts. Each card starts with its definition hidden. Selecting a card reveals its definition and updates the button to `Hide Answer`.

## Features

- Six programming flash cards
- JavaScript topics: variables, functions, arrays, objects, and event listeners
- jQuery topic: selectors
- One-card-at-a-time answer reveal behavior
- Responsive card grid that adapts to the viewport width
- Hover and click feedback for cards and buttons
- No build step, package manager, or external dependency required

## Project Structure

```text
.
├── card.html          # Main page and flash-card content
├── css/
│   └── card.css       # Layout, colors, responsive grid, and animations
├── js/
│   └── card.js        # Card click behavior and button labels
└── img/               # Image assets directory (currently unused)
```

## Getting Started

### Run locally

1. Open the project folder in VS Code or another editor.
2. Open `card.html` directly in a modern web browser.
3. Click `Show Answer` on any card to reveal its definition.

A local server is optional. For example, with VS Code, the Live Server extension can serve `card.html` and automatically reload the page while editing.

## How It Works

### HTML

`card.html` defines the page heading and six `.flash-card` elements. Each card contains:

- A term in `.card-title`
- Its language or library in `.card-subtitle`
- A definition in `.card-description`
- A button with a unique ID

### CSS

`css/card.css` provides the visual design. Definitions are initially collapsed with zero height and transparency. Adding the `show` class to a card expands the definition and fades it into view.

The card collection uses a responsive CSS Grid with `auto-fit`, so cards reflow from a multi-column layout to fewer columns on smaller screens.

### JavaScript

`js/card.js` waits for the document to load, finds each card and button by ID, and attaches click handlers. The handlers toggle the active card's `show` class, close other cards, and update button text based on the current state.

The page does not load jQuery. The jQuery reference in the heading describes the subject of one flash card; all current interactions are implemented with the browser's vanilla JavaScript DOM APIs.

## Responsiveness

The layout is designed to work across desktop, tablet, and mobile screen sizes:

- On desktop, the cards use a responsive multi-column CSS Grid layout.
- At widths up to `768px`, the grid uses smaller card columns suitable for tablets and small laptops.
- At widths up to `480px`, cards are displayed in a single column with reduced spacing and padding.
- On phones, the answer buttons expand to the full card width for easier tapping.
- Heading and card text use responsive sizing so content remains readable on smaller screens.

## Flash Cards

| Term | Subject |
| --- | --- |
| Variable | JavaScript |
| Function | JavaScript |
| Array | JavaScript |
| Object | JavaScript |
| Event Listener | JavaScript |
| Selector | jQuery |

## Customization

### Add or edit a card

In `card.html`, copy an existing `.flash-card` block and give the card and button new unique IDs. Add a matching event handler in `js/card.js`, or refactor the handlers into a shared loop if you want the page to support an arbitrary number of cards.

### Change the appearance

Update the color, spacing, typography, and responsive layout rules in `css/card.css`. The `.card-description` and `.flash-card.show .card-description` rules control the answer reveal animation.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript

## License

No license has been specified for this project.

## Contact

- **Contact:** No contact information has been provided for this project.
