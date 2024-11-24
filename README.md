
# **React Beautiful Card**

A React component for creating visually appealing cards with an image, title, and description. Perfect for showcasing content, products, or any kind of information in an elegant and responsive card design.

---

## **Features**
- Responsive and customizable card design.
- Supports dynamic images, titles, and descriptions.
- Simple and lightweight, built with React.
- Customizable via `className` and additional styles.

---

## **Installation**

To install the package, run:

```bash
npm install react-beautiful-card
```

or

```bash
yarn add react-beautiful-card
```

---

## **Usage**

Here’s an example of how to use the `React Beautiful Card` component:

```tsx
import React from "react";
import { Card } from "npm i react-beautiful-card";

const App = () => {
  return (
    <div>
      <Card
        title="Beautiful Sunset"
        description="Experience the serene beauty of a stunning sunset."
        imageUrl="https://via.placeholder.com/300"
      />
    </div>
  );
};

export default App;
```

---

## **Props**

| Prop         | Type     | Description                                      | Required |
|--------------|----------|--------------------------------------------------|----------|
| `title`      | `string` | The title displayed on the card.                 | Yes      |
| `description`| `string` | The description or content displayed on the card.| Yes      |
| `imageUrl`   | `string` | The URL of the image displayed on the card.      | Yes      |
| `className`  | `string` | Additional class names for custom styling.       | No       |

---

## **Styling**

The card comes with default styles, but you can customize it using the `className` prop or by overriding the CSS classes.

### Default CSS Classes:
- `.card`
- `.card-image`
- `.card-content`
- `.card-title`
- `.card-description`

### Example Customization:

```css
/* Override styles in your project */
.card {
  border: 2px solid #ff6600;
  border-radius: 12px;
}

.card-title {
  color: #ff6600;
}
```

---

## **Build and Development**

To contribute or modify the package, clone the repository and install dependencies:

```bash
git clone https://github.com/Prakash202112345/react-beautiful-card
cd npm i react-beautiful-card
npm install
```

### Run the development server:
```bash
npm start
```

### Build the package:
```bash
npm run build
```

---

## **Contributing**

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](hhttps://github.com/Prakash202112345/ npm i react-beautiful-card).

---

## **License**

This package is licensed under the [MIT License](LICENSE).

---

## **Author**

[Prakash Sharma](https://github.com/Prakash202112345)  
Feel free to reach out for suggestions, feedback, or support!
