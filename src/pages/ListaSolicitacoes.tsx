import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { Eye } from "lucide-react";

const mockSolicitacoes = [
  {
    id: "SOL-2024-001",
    data: "15/03/2024",
    status: "Em Análise",
    agricultor: "João Silva",
    cpf: "123.456.789-00",
    insumo: "Sementes de Milho",
    quantidade: "500 kg",
    cultura: "Milho",
  },
  {
    id: "SOL-2024-002",
    data: "10/03/2024",
    status: "Aprovado",
    agricultor: "Maria Santos",
    cpf: "987.654.321-00",
    insumo: "Adubo NPK",
    quantidade: "1000 kg",
    cultura: "Soja",
  },
  {
    id: "SOL-2024-003",
    data: "08/03/2024",
    status: "Em Transporte",
    agricultor: "Pedro Oliveira",
    cpf: "456.789.123-00",
    insumo: "Fertilizante Orgânico",
    quantidade: "750 kg",
    cultura: "Feijão",
  },
  {
    id: "SOL-2024-004",
    data: "05/03/2024",
    status: "Entregue",
    agricultor: "Ana Costa",
    cpf: "789.123.456-00",
    insumo: "Sementes de Soja",
    quantidade: "600 kg",
    cultura: "Soja",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Em Análise":
      return "bg-yellow-500";
    case "Aprovado":
      return "bg-green-500";
    case "Em Transporte":
      return "bg-blue-500";
    case "Entregue":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

const ListaSolicitacoes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Todas as Solicitações</h1>
          <p className="text-muted-foreground">
            Visualize e acompanhe todas as solicitações de insumos cadastradas
          </p>
        </div>

        <div className="bg-card border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Agricultor</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Insumo</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Cultura</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSolicitacoes.map((solicitacao) => (
                <TableRow key={solicitacao.id}>
                  <TableCell className="font-medium">{solicitacao.id}</TableCell>
                  <TableCell>{solicitacao.data}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(solicitacao.status)}>
                      {solicitacao.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{solicitacao.agricultor}</TableCell>
                  <TableCell>{solicitacao.cpf}</TableCell>
                  <TableCell>{solicitacao.insumo}</TableCell>
                  <TableCell>{solicitacao.quantidade}</TableCell>
                  <TableCell>{solicitacao.cultura}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate("/rastreamento")}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6">
          <Button onClick={() => navigate("/solicitar/dados-agricultor")}>
            Nova Solicitação
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListaSolicitacoes;
