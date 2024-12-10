import { useEffect, useState } from "react";
import axios from "axios";
import { FiTrash } from "react-icons/fi";

// Definição do tipo Customer
interface Customer {
  id: string;
  name: string;
  email: string;
  status: boolean;
}

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customers, setCustomers] = useState<Customer[]>([]); // Estado tipado como Customer[]
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:3333"; // Ajuste conforme a URL do backend

  // Buscar todos os clientes
  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Customer[]>(`${API_URL}/customer`);
      setCustomers(response.data); // Atualiza a lista com os clientes recebidos
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Cadastrar um novo cliente
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post<Customer>(`${API_URL}/cliente`, { name, email });
      setCustomers((prev) => [...prev, response.data]); // Adiciona o novo cliente à lista
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  // Deletar cliente
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/customer/${id}`);
      setCustomers((prev) => prev.filter((customer) => customer.id !== id)); // Remove o cliente da lista
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
    }
  };

  // Buscar clientes ao carregar o componente
  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-medium text-white">Clientes</h1>

        {/* Formulário de Cadastro */}
        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-medium text-white">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            className="w-full mb-5 p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="font-medium text-white">Email</label>
          <input
            type="email"
            placeholder="Digite seu email completo"
            className="w-full mb-5 p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
          />
        </form>

        {/* Lista de Clientes */}
        <section className="flex flex-col">
          {loading ? (
            <p className="text-white">Carregando clientes...</p>
          ) : (
            customers.map((customer) => (
              <article
                key={customer.id}
                className="w-full bg-white rounded p-2 mb-4 relative"
              >
                <p>
                  <span className="font-medium">Nome: </span>
                  {customer.name}
                </p>
                <p>
                  <span className="font-medium">Email: </span>
                  {customer.email}
                </p>
                <p>
                  <span className="font-medium">Status: </span>
                  {customer.status ? "Ativo" : "Inativo"}
                </p>
                <button
                  onClick={() => handleDelete(customer.id)}
                  className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute top-2 right-2"
                >
                  <FiTrash size={18} color="#FFF" />
                </button>
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

