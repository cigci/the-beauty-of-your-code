<img src="icons/TBOYC-Light.svg" alt="The Beauty of Your Code (TBOYC)" width="128">

# The Beauty of Your Code (TBOYC)

**TBOYC** is a lightweight library designed to beautifully display snippets of code on your website. Whether you're a developer looking for fine-grained customisation or a non-developer looking for plug-and-play simplicity, TBOYC makes it easy to showcase your code.

## Getting Started

### Installation

1. **Add the TBOYC script to your website:**    
   Include the script file of the library in your HTML:
   ```html
   <script src="tboyc.js"></script>
2. **Prepare Code Snippets:**   
    Wrap your code snippets in a container like this:
    ```html
    <div class="tboyc-code">
        <code>
            console.log("Hello, World!");
        </code>
    </div>
3. **Add Meta Tags:**   
    Use meta tags to control the library's behavior.

## Meta Tag Options
TBOYC uses HTML meta tags to customize its behavior. Here's a list of supported meta tags, their usage, and available options.

| **Meta Name**       | **Description**                                   | **Example Value**   | **Default**      |
|----------------------|---------------------------------------------------|---------------------|------------------|
| `theme`             | Specifies the theme for syntax highlighting.      | `vscode/dark`       | `vscode/dark`    |
| `btn`               | Toggles the copy-to-clipboard button.             | `on`, `off`         | `on`             |
| `title`             | Adds a title above the code block.                | `My Script`         | `null` (no title)|
| `width`             | Sets the width of the code block container.         | `100%`, `25%`, `400px` | `100%`           |

> **Note:** The `language` meta setting is planned for a future release and is currently not functional.

> **Error Handling:** If an invalid meta value is provided, TBOYC will use the default settings for that meta name.

## Example
1. **Basic Setup:** 
    ```html
    <div id="tboyc-code">
        <meta name="theme" content="vscode/dark">
        <meta name="btn" content="on">
        <meta name="title" content="example.js">
        <meta name="language" content="javascript">

        <code>
            console.log("Hello, World!");
        </code>
    </div>
2. **Effect:**  
    The code will use the VSCode Dark theme.    
    A copy-to-clipboard button will appear. 
    The snippet will have the title "example.js".   
    ~~Syntax highlighting will follow JavaScript rules.~~   

## Custom Themes
### Adding a Custom Theme:
1. **Add the custom keyword in the theme meta tag:**
    ```html
    <meta name="theme" content="custom">
2. **Define your custom theme styles in your CSS file:**
    ```css
    .tboyc-keyword {
        color: #000000;
    }
    .tboyc-string {
        color: #FFFFFF;
    }

## Available CSS Classes for Styling

The following CSS classes are automatically applied to various code elements and can be customized:

| **Class**         | **Description**                  |
|--------------------|----------------------------------|
| `tboyc-string`    | Highlights string literals.      |
| `tboyc-comment`   | Styles code comments.            |
| `tboyc-attribute` | Marks attributes in code.        |
| `tboyc-keyword`   | Highlights reserved keywords.    |
| `tboyc-type`      | Styles type annotations.         |
| `tboyc-constant`  | Marks constant values.           |
| `tboyc-symbol`    | Highlights symbols.              |
| `tboyc-number`    | Styles numeric literals.         |


## Contributions

Contributions are welcome! If you want to add support for more features or suggest improvements, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Advanced Features
### Future Support for Language Detection
The language meta tag will allow fine-grained syntax highlighting. Planned features include:

- Automatic Detection: Based on the content of the code block.
- Manual Specification: Developers can explicitly set the language.

## Demo
Try it out on the [TBOYC Live Demo.](https://cigci.com/projects/tboyc/index.html)