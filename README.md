# Tip Calculator App - React

Este proyecto es una **Calculadora de Propinas** construida con **React**, optimizada en términos de rendimiento y con una estructura de componentes modular. La aplicación permite a los usuarios agregar ítems a su orden, calcular el monto de la propina y ver el costo total de su consumo.

## Características

- **Agregar/Eliminar Ítems**: Los usuarios pueden agregar o eliminar ítems dinámicamente de su orden.
- **Cálculo de Propinas**: Introduce un porcentaje para calcular el monto de la propina y visualizar el total.
- **Optimización de rendimiento**: Los componentes solo se renderizan cuando hay cambios en el estado, mejorando la eficiencia.
- **Diseño Responsive**: Estilizado con **TailwindCSS** para un diseño moderno y adaptable a diferentes tamaños de pantalla.

## Herramientas y Librerías Utilizadas

### 1. **React**
- **useState**: Utilizado para manejar el estado de la aplicación, como los ítems en la orden y los montos de propina.
- **useMemo**: Optimiza cálculos costosos (como el total y las propinas), asegurando que solo se recalculen cuando sea necesario, mejorando el rendimiento.
- **Hook Personalizado**: Centraliza las funcionalidades principales, como:
  - `addItem`: Agrega un ítem a la lista de la orden.
  - `removeItem`: Elimina un ítem de la lista.
  - **Manejo de estados** para `order` y `tip`, facilitando una estructura más clara y reutilizable.
- **Optimización de rendimiento**: Los componentes solo se renderizan cuando detectan cambios en el estado correspondiente, reduciendo renderizados innecesarios y mejorando la experiencia de usuario.

### 2. **TailwindCSS**
- Utilizado para diseñar un **UI** moderno y responsive. Simplifica el manejo de clases y asegura que la aplicación sea visualmente atractiva en dispositivos móviles y pantallas más grandes.

### 3. **Vite**
- **Vite** es la herramienta utilizada para la construcción y el desarrollo rápido de la aplicación. Con su **Hot Module Replacement (HMR)**, los cambios en el código se reflejan instantáneamente durante el desarrollo, sin necesidad de recargar la página.

## Estructura del Proyecto

El proyecto está dividido en varios componentes para mejorar la reutilización de código y la organización:

- **OrderList**: Muestra la lista de ítems en la orden.
- **AddItemForm**: Permite a los usuarios agregar nuevos ítems a la lista.
- **TipCalculator**: Maneja el input para el porcentaje de la propina y muestra el monto calculado.
- **TotalDisplay**: Muestra el costo total de la orden, incluida la propina.
