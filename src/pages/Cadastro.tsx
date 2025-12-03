import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-farm.jpg";

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    cpf: "",
    telefone: "",
    email: "",
    matriculaIPA: "",
    localAtuacao: "",
    senha: "",
    confirmarSenha: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    if (formData.senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres!");
      return;
    }
    // Simulate registration
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main 
        className="flex-1 flex items-center justify-center px-6 py-12 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="relative z-10 w-full max-w-lg">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-border">
            <h1 className="text-3xl font-bold text-center mb-2 text-foreground">Criar Conta</h1>
            <p className="text-center text-muted-foreground mb-6">
              Cadastre-se no sistema S.A.F.R.A.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nomeCompleto" className="text-foreground">Nome Completo *</Label>
                <Input
                  id="nomeCompleto"
                  name="nomeCompleto"
                  type="text"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  placeholder="João Silva"
                  className="mt-1"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cpf" className="text-foreground">CPF *</Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    type="text"
                    value={formData.cpf}
                    onChange={handleChange}
                    placeholder="000.000.000-00"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telefone" className="text-foreground">Telefone *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="joao@email.com"
                  className="mt-1"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="matriculaIPA" className="text-foreground">Matrícula IPA</Label>
                  <Input
                    id="matriculaIPA"
                    name="matriculaIPA"
                    type="text"
                    value={formData.matriculaIPA}
                    onChange={handleChange}
                    placeholder="000000"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="localAtuacao" className="text-foreground">Local de Atuação</Label>
                  <Input
                    id="localAtuacao"
                    name="localAtuacao"
                    type="text"
                    value={formData.localAtuacao}
                    onChange={handleChange}
                    placeholder="Ex: Escritório Local"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="senha" className="text-foreground">Senha * (min. 6 caracteres)</Label>
                  <Input
                    id="senha"
                    name="senha"
                    type="password"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="••••••"
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirmarSenha" className="text-foreground">Confirmar Senha *</Label>
                  <Input
                    id="confirmarSenha"
                    name="confirmarSenha"
                    type="password"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    placeholder="••••••"
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cidade" className="text-foreground">Cidade</Label>
                  <Input
                    id="cidade"
                    name="cidade"
                    type="text"
                    value={formData.cidade}
                    onChange={handleChange}
                    placeholder="Recife"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="estado" className="text-foreground">Estado</Label>
                  <Input
                    id="estado"
                    name="estado"
                    type="text"
                    value={formData.estado}
                    onChange={handleChange}
                    placeholder="PE"
                    className="mt-1"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-5 mt-4">
                CADASTRAR
              </Button>

              <div className="text-center">
                <span className="text-sm text-muted-foreground">Já tem uma conta? </span>
                <Link to="/login" className="text-sm text-primary hover:underline font-medium">
                  Faça login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cadastro;
