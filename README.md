# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Code structure 
Codes are divided into 3 main parts:
1. Dashboard
2. Choose topic - choose subtopic topic 3
3. Contents

 ## Folders and files
1. **images**  
    Folder for content images. Name files as `[lang]-slide[no].png`, where `[no]` is the slide number from PowerPoint.

2. **subtopic1-4**  
    Folders for subtopic contents:  
    - Subtopic 1: *Identify planks in my own eye & heart responses to conflict*  
    - Subtopic 2: *Subtopic 2 title*  
    - Subtopic 3: *Subtopic 3 title*  
    - Subtopic 4: *Resolve differences*

3. **texts**  
    Contains all text content not included in images.

4. **topic1, topic2, topic4**  
    Folders for topic contents:  
    - Topic 1: *Personal Peacemaking Topics*  
    - Topic 2: *Responses to Conflict*  
    - Topic 4: *Cultural Considerations*

5. **app.jsx**  
    The main entry point for the React application. Imports React, required components, and renders the root component.
    
6. **images.js**
    The global variable and path file for other jsx file to access

7. **main.jsx** 
     * Entry point for the React application.
     * Renders the root component into the DOM.
     * Imports global styles and sets up providers (e.g., Redux, Router).

8. **routes.jsx**
    The global variable and path file for other jsx file to access, all in one place and easier to manage and configure application routes.\

9. **Colors.css**
    Manage and add new color for other files to use here