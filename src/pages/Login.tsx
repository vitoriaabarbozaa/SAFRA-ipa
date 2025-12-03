import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-farm.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [showRecuperarSenha, setShowRecuperarSenha] = useState(false);
  
  // Recuperar senha form state
  const [recuperarCpf, setRecuperarCpf] = useState("");
  const [recuperarEmail, setRecuperarEmail] = useState("");
  const [recuperarTelefone, setRecuperarTelefone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  const handleRecuperarSenha = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate password recovery
    alert("Um link de recuperação será enviado para seu email.");
    setShowRecuperarSenha(false);
    setRecuperarCpf("");
    setRecuperarEmail("");
    setRecuperarTelefone("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main 
        className="flex-1 flex items-center justify-center px-6 py-12 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-border">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Login</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="cpf" className="text-foreground">CPF do usuário</Label>
                <Input
                  id="cpf"
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="000.000.000-00"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="senha" className="text-foreground">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                ENTRAR
              </Button>

              <div className="text-center">
                <button 
                  type="button" 
                  className="text-sm text-primary hover:underline"
                  onClick={() => setShowRecuperarSenha(true)}
                >
                  Esqueci a senha
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Dialog Recuperar Senha */}
      <Dialog open={showRecuperarSenha} onOpenChange={setShowRecuperarSenha}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-primary">
              Recuperar Senha
            </DialogTitle>
            <p className="text-center text-muted-foreground text-sm">
              Preencha os dados abaixo para recuperar sua senha
            </p>
          </DialogHeader>
          
          <form onSubmit={handleRecuperarSenha} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="recuperar-cpf" className="text-foreground">CPF *</Label>
              <Input
                id="recuperar-cpf"
                type="text"
                value={recuperarCpf}
                onChange={(e) => setRecuperarCpf(e.target.value)}
                placeholder="000.000.000-00"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="recuperar-email" className="text-foreground">Email *</Label>
              <Input
                id="recuperar-email"
                type="email"
                value={recuperarEmail}
                onChange={(e) => setRecuperarEmail(e.target.value)}
                placeholder="joao@email.com"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="recuperar-telefone" className="text-foreground">Telefone *</Label>
              <Input
                id="recuperar-telefone"
                type="tel"
                value={recuperarTelefone}
                onChange={(e) => setRecuperarTelefone(e.target.value)}
                placeholder="(00) 00000-0000"
                className="mt-1"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-4 mt-6">
              RECUPERAR SENHA
            </Button>

            <div className="text-center">
              <button 
                type="button" 
                className="text-sm text-primary hover:underline"
                onClick={() => setShowRecuperarSenha(false)}
              >
                Voltar para login
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Login;
