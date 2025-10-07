# React-PWA-Starter

Una aplicación React creada con **Create React App (CRA)**, que incluye soporte para **Progressive Web App (PWA)**, infraestructura de pruebas con Jest y react-testing-library, y un flujo de desarrollo optimizado. Este proyecto sirve como base para crear aplicaciones modernas en React, con buenas prácticas de arquitectura y herramientas de monitoreo de rendimiento.

## Índice

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Primeros pasos](#primeros-pasos)
- [Scripts disponibles](#scripts-disponibles)
- [PWA](#pwa)
- [Compatibilidad del navegador](#compatibilidad-del-navegador)
- [Pruebas](#pruebas)
- [Monitoreo del rendimiento](#monitoreo-del-rendimiento)
- [Licencia](#licencia)

## Descripción

`React-PWA-Starter` es una aplicación React moderna basada en **React 18.2.0**. El proyecto abstrae la configuración de Webpack, Babel y ESLint usando `react-scripts 5.0.1`, ofreciendo una experiencia de desarrollo sin complicaciones.

La aplicación sigue el flujo estándar de CRA:

1. El navegador carga `public/index.html`.
2. HTML contiene un `<div id="root">` como punto de montaje.
3. `src/index.js` crea la raíz de React usando `ReactDOM.createRoot()`.
4. La raíz se adjunta al DOM.
5. La aplicación se envuelve en `React.StrictMode` para comprobaciones de desarrollo.
6. `App` se representa como componente raíz.
7. La UI se renderiza en el navegador.
8. `reportWebVitals()` inicializa el monitoreo de rendimiento.

## Tecnologías

| Componente                    | Tecnología                       | Versión | Propósito                                      |
|--------------------------------|---------------------------------|---------|-----------------------------------------------|
| UI Framework                   | React                            | 18.2.0  | Interfaz de usuario basada en componentes    |
| DOM Integration                | react-dom                        | 18.2.0  | Enlace de React al DOM                        |
| Sistema de construcción        | react-scripts                    | 5.0.1   | Abstracción de Webpack/Babel                  |
| Testing Framework              | @testing-library/react           | 13.4.0  | Utilidades de prueba de componentes          |
| Matchers                       | @testing-library/jest-dom        | 5.16.5  | Comparadores de aserciones DOM               |
| Simulación de eventos de usuario | @testing-library/user-event     | 13.5.0  | Interacciones del usuario                     |
| Monitoreo del rendimiento      | web-vitals                       | 2.1.4   | Métricas de rendimiento web                   |

## Estructura del proyecto

