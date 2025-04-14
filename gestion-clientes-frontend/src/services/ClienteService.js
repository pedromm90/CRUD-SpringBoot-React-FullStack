import axios from "axios";

const CLIENTE_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";

class ClienteService {

  //Listar clientes
  getAllClientes() {
    return axios.get(CLIENTE_BASE_REST_API_URL);
  }

  //Crear clientes
  createCliente(cliente) {
    return axios.post(CLIENTE_BASE_REST_API_URL,cliente);
  }

  //Consultar cliente por ID
  getClienteById(clienteId) {
    return axios.get(CLIENTE_BASE_REST_API_URL + '/' + clienteId);
  }

  //Actualizar cliente por ID
  updateCliente(clienteId,cliente) {
    return axios.put(CLIENTE_BASE_REST_API_URL + '/' + clienteId,cliente);
  }

  //Eliminar cliente por ID
  deleteCliente(clienteId) {
    return axios.delete(CLIENTE_BASE_REST_API_URL + '/' + clienteId);
  }

}

export default new ClienteService();