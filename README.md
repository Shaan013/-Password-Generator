# 🔐 Password Generator

A **fun and secure** password generator built with React.js, Vite, and Tailwind CSS. Never worry about weak passwords again—this app crafts strong and unpredictable ones like a wizard! 🧙‍♂️✨

## 🎯 Features

- ⚡ Generate random passwords instantly
- 🎛️ Customize password length
- 🔠 Include/exclude uppercase letters, lowercase letters, numbers, and special characters
- 📋 Copy generated password to clipboard with a single click
- 🎨 Sleek and stylish interface powered by Tailwind CSS

## 🚀 Installation

To get started, follow these steps:

1. 🛠️ Clone the repository:
   ```sh
   git clone https://github.com/yourusername/password-generator.git
   cd password-generator
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   ```
3. 🎨 Install Tailwind CSS:
   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
4. ⚙️ Configure Tailwind CSS in `tailwind.config.js`:
   ```js
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
5. 🎭 Add Tailwind directives to `index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
6. ▶️ Start the development server:
   ```sh
   npm run dev
   ```

## 🎮 Usage

1. 🖥️ Open the app in your browser (usually at `http://localhost:5173`).
2. 🔧 Adjust password preferences using the available options.
3. 🎲 Click the **Generate Password** button to create a secure password.
4. 📋 Copy the password using the **Copy to Clipboard** button.

## 🛠️ Technologies Used

- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 📝 JavaScript (ES6+)
- 🌐 HTML5
- 🎭 CSS3

## 📁 Project Structure
```
password-generator/
├── src/
│   ├── components/
│   │   ├── PasswordGenerator.js
│   │   ├── PasswordOptions.js
│   ├── App.js
│   ├── main.jsx
│   ├── index.css
├── public/
│   ├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
```

## 🌍 Deployment

To deploy the app, use the following command to build the project:
```sh
npm run build
```
This will create an optimized production build in the `dist/` folder.

## 🤝 Contributing

Contributions are welcome! If you have any cool ideas, feel free to open an issue or submit a pull request. Let’s make password security fun together! 🔐😄

## 📜 License

This project is licensed under the MIT License.

---

Happy coding and stay secure! 🔑🚀

