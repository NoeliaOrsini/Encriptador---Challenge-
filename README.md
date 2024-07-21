# Encriptador de Textos

Este proyecto es un encriptador de textos simple creado con HTML, CSS y JavaScript. Permite encriptar y desencriptar mensajes de texto usando un conjunto específico de reglas. Siguiendo la consigna del Challenge propuesto por Alura, solo acepta letras minúsculas, sin acentos, ni caracteres especiales, puntos y comas, tampoco la letra ñ, por ser considerada un caracter especial. El texto se ingresa por un sector señalizado al efecto y sale por otro campo donde se puede copiar el texto.

## Características

- **Encriptar Texto**: Convierte vocales en palabras específicas.
- **Desencriptar Texto**: Reconvierte las palabras específicas a sus vocales originales.
- **Copiar al Portapapeles**: Permite copiar el texto encriptado o desencriptado al portapapeles.
- **Limpiar Texto**: Limpia el contenido del área de texto.

## Reglas de Encriptación

- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `a` se convierte en `ai`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

## Reglas de Desencriptación

- `enter` se convierte en `e`
- `imes` se convierte en `i`
- `ai` se convierte en `a`
- `ober` se convierte en `o`
- `ufat` se convierte en `u`

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la aplicación.
- `style.css`: Archivo de estilos CSS para la apariencia de la aplicación.
- `scripts.js`: Archivo JavaScript con la lógica de encriptación y desencriptación.
- `assets/`: Carpeta que contiene imágenes.

**Creado por Noelia Orsini para Alura Latam**
