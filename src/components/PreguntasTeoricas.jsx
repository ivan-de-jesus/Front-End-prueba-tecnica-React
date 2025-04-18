import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const preguntas = [
  {
    titulo: '1. Angular y React',
    contenido: `
P: ¿Qué es React y cuál es su propósito principal en el desarrollo web?
R: Es una biblioteca de JavaScript para construir interfaces de usuario.

P: ¿Qué es un componente en React y cómo se crea uno?
R: Es una función o clase que retorna JSX. Ejemplo:
   const MiComponente.jsx;

P: ¿Cuál es la diferencia entre ngOnInit() y constructor() en Angular?
R: constructor() se usa para inyección de dependencias; ngOnInit() para lógica inicial post-creación.`
  },
  {
    titulo: '2. HTML5',
    contenido: `
P: ¿Cuáles son algunas de las nuevas características introducidas en HTML5?
R: Etiquetas semánticas, multimedia, almacenamiento local, canvas.

P: Describe la diferencia entre las etiquetas <section> y <div>.
R: <section> tiene valor semántico; <div> es contenedor genérico.

P: ¿Qué son los atributos data- en HTML5 y para qué se utilizan?
R: Atributos personalizados para almacenar datos. Ej: data-id="123"`
  },
  {
    titulo: '3. CSS / Sass',
    contenido: `
P: ¿Qué es Sass y cuál es su ventaja sobre CSS convencional?
R: Preprocesador con variables, funciones, y anidación para un CSS más modular.

P: Explica la diferencia entre @import y @use en Sass.
R: @use es moderno, evita conflictos. @import está obsoleto.

P: ¿Qué es BEM y cómo puede mejorar la estructura y mantenimiento del código CSS?
R: `
  },
  {
    titulo: '4. JavaScript / TypeScript',
    contenido: `
P: ¿Cuál es la diferencia entre JavaScript y TypeScript?
R:TypeScript admite tipado estático y dinámico, mientras que JavaScript solo admite tipado dinámico.

P: ¿Qué son los tipos en TypeScript y cómo pueden mejorar el desarrollo de aplicaciones web?
R: Son definiciones de dato (string, number) que previenen errores.

P: Explica cómo se declara una variable en JavaScript y en TypeScript.
R: JS: let x = 5;  |  TS: let x: number = 5;`
  },
  {
    titulo: '5. Sistema de Gestión de Paquetes (npm)',
    contenido: `
P: ¿Qué es npm y cuál es su función en el desarrollo de aplicaciones web?
R: Es un gestor de paquetes para instalar y administrar librerías.

P: Describe el proceso para instalar un paquete npm en un proyecto.
R: Ejecutar: npm install (nombre del paquete)`
  },
  {
    titulo: '6. Integración e Implementación de APIs y WebSocket',
    contenido: `
P: Explica qué es una API y cómo se utiliza en el desarrollo web.
R: Es una interfaz que conecta aplicaciones para compartir datos.

P: ¿Qué es JSON y cuál es su relación con las APIs REST?
R: Es un formato de intercambio de datos, común en APIs REST.

P: Describe el proceso para realizar una solicitud GET a una API REST utilizando JavaScript/TypeScript.
R: fetch('url').then(res => res.json());

P: Describe cómo integrarías un WebSocket.
R: Usaría WebSocket API: const socket = new WebSocket('ws://servidor'); para conexión en tiempo real.`
  },
  {
    titulo: '7. Patrón MVC',
    contenido: `
P: Define el patrón de diseño Modelo-Vista-Controlador (MVC) y explica sus componentes.
R: Modelo (datos), Vista (UI), Controlador (lógica). Divide responsabilidades.

P: ¿Cuál es la ventaja de utilizar el patrón MVC en el desarrollo de aplicaciones web?
R: Código más organizado, reutilizable y fácil de mantener.`
  },
  {
    titulo: '8. Pruebas Unitarias e Integración (Jasmine y Karma)',
    contenido: `
P: ¿Qué son las pruebas unitarias y por qué son importantes en el desarrollo de software?
R: Verifican funciones específicas. Previenen errores futuros.

P: Explica la diferencia entre las pruebas unitarias y las pruebas de integración.
R: Unitarias prueban una función aislada. Integración prueban múltiples componentes juntos.

P: Describe cómo se configura y ejecuta un conjunto de pruebas Jasmine utilizando Karma en un proyecto Angular.
R: 

P: ¿Qué tan cómodo te sentirías trabajando con Angular?
R: Me siento cómodo. Aunque uso más Vue js, puedo adaptarme rápidamente.`
  }
];

const PreguntasTeoricas = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = preguntas.length;
  const currentPregunta = preguntas[currentPage - 1];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        py: 4,
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{
            borderRadius: 8,
            textTransform: 'none',
            px: 3,
            py: 1,
            bgcolor: '#4fc3f7',
            boxShadow: `
              6px 6px 12px rgba(0,0,0,0.1),
              -6px -6px 12px rgba(255,255,255,0.4)
            `,
            '&:hover': {
              bgcolor: '#039be5',
            },
          }}
        >
          Regresar
        </Button>
      </Box>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Preguntas de la Prueba Teórica
      </Typography>

      <Box mt={2} mb={4} width="100%" maxWidth={700}>
        <Card
          sx={{
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            boxShadow: `
              6px 6px 12px rgba(0,0,0,0.1),
              -6px -6px 12px rgba(255,255,255,0.4)
            `,
            color: '#333',
          }}
        >
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {currentPregunta.titulo}
            </Typography>
            <Typography variant="body2" whiteSpace="pre-line">
              {currentPregunta.contenido}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Paginador */}
      <Box display="flex" justifyContent="center" gap={2}>
        {[...Array(totalPages).keys()].map((n) => {
          const page = n + 1;
          const isActive = page === currentPage;

          return (
            <Box
              key={page}
              onClick={() => setCurrentPage(page)}
              sx={{
                width: isActive ? 16 : 12,
                height: isActive ? 16 : 12,
                borderRadius: '50%',
                boxShadow: isActive
                  ? 'inset 4px 4px 8px #b0bec5, inset -4px -4px 8px #ffffff, 0 0 4px 2px #4fc3f7'
                  : '4px 4px 8px #b0bec5, -4px -4px 8px #ffffff',
                backgroundColor: isActive ? '#e0e0e0' : '#d6d6d6',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default PreguntasTeoricas;
