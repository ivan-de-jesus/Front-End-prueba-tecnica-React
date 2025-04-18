import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ Aquí sí es correcto

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data));
  }, [id]);

  if (!user) return <Typography variant="h6" textAlign="center">Cargando...</Typography>;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 4,
        position: 'relative' // ✅ Para que el botón se posicione bien
      }}
    >
      {/* Botón de regreso */}
      <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{
            borderRadius: 8,
            boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
            textTransform: 'none',
            bgcolor: '#4fc3f7',
            '&:hover': {
              bgcolor: '#039be5',
            },
          }}
        >
          Regresar
        </Button>
      </Box>

      {/* Card con detalle del usuario */}
      <Card
        sx={{
          width: {
            xs: 300,
            sm: 400,
            md: 500,
          },
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: `
            6px 6px 12px rgba(0,0,0,0.1),
            -6px -6px 12px rgba(255,255,255,0.4)
          `,
          color: "#333",
          textAlign: 'left',
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {user.name}
          </Typography>
          <Box mb={1}><strong>Usuario:</strong> {user.username}</Box>
          <Box mb={1}><strong>Email:</strong> {user.email}</Box>
          <Box mb={1}><strong>Teléfono:</strong> {user.phone}</Box>
          <Box mb={1}><strong>Ciudad:</strong> {user.address.city}</Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default UserDetail;

