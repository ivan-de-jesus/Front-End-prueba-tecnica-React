import React, { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 4,
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Lista de Usuarios
      </Typography>

      <Box display="flex" justifyContent="center" mb={4}>
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.replace(/<.*?>/g, ""));
            setCurrentPage(1);
          }}
          sx={{ width: "100%", maxWidth: 400 }}
        />
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {currentUsers.map((user) => (
          <Grid item key={user.id}>
            <Card
              component={Link}
              to={`/usuario/${user.id}`}
              sx={{
                width: {
                  xs: 280, // 📱 ancho fijo en móviles
                  sm: "100%", // 🖥️ comportamiento fluido desde sm en adelante
                },
                maxWidth: 320,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: `
            6px 6px 12px rgba(0,0,0,0.1),
            -6px -6px 12px rgba(255,255,255,0.4)
          `,
                color: "#333",
                textDecoration: "none",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `
              4px 4px 8px rgba(0,0,0,0.15),
              -4px -4px 8px rgba(255,255,255,0.4)
            `,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar sx={{ bgcolor: "#4fc3f7", marginRight: 2 }}>
                    <PersonIcon />
                  </Avatar>
                  <Typography variant="h6" fontWeight="600">
                    {user.name}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <EmailIcon sx={{ fontSize: 18, marginRight: 1 }} />
                  <Typography variant="body2">{user.email}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <PhoneIcon sx={{ fontSize: 18, marginRight: 1 }} />
                  <Typography variant="body2">{user.phone}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Controles de paginación */}
      <Box display="flex" justifyContent="center" mt={4} gap={2}>
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
                borderRadius: "50%",
                boxShadow: isActive
                  ? "inset 4px 4px 8px #b0bec5, inset -4px -4px 8px #ffffff, 0 0 4px 2px #4fc3f7"
                  : "4px 4px 8px #b0bec5, -4px -4px 8px #ffffff",
                backgroundColor: isActive ? "#e0e0e0" : "#d6d6d6",

                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
            />
          );
        })}
      </Box>
      <Box mt={4} mb={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={() => navigate('/preguntas')}
          sx={{
            borderRadius: 8,
            textTransform: "none",
            px: 3,
            py: 1,
            bgcolor: "#4fc3f7",
            boxShadow: `
        6px 6px 12px rgba(0,0,0,0.1),
        -6px -6px 12px rgba(255,255,255,0.4)
      `,
            "&:hover": {
              bgcolor: "#039be5",
            },
          }}
        >
          Ver preguntas de la prueba teórica
        </Button>
      </Box>
    </Container>
  );
};

export default UserList;
