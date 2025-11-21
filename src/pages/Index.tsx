import { Link } from "react-router-dom";
import { LogIn, Leaf, FileText, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-farm.jpg";
import safraIcon from "@/assets/safra-icon.png";

const Index = () => {
  const actionCards = [
    {
      icon: LogIn,
      title: "Login",
      link: "/login"
    },
    {
      icon: Leaf,
      title: "Solicitação de Insumos",
      link: "/solicitar/dados-agricultor"
    },
    {
      icon: FileText,
      title: "Rastreamento de Pedidos",
      link: "/rastreamento"
    },
    {
      icon: Phone,
      title: "Contato IPA",
      link: "/contato"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="relative z-10 text-center text-primary-foreground px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex justify-center mb-8 animate-in zoom-in duration-700 delay-150">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
              <img src={safraIcon} alt="S.A.F.R.A." className="w-40 h-40 relative drop-shadow-2xl" />
            </div>
          </div>
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-xl md:text-2xl font-light tracking-wide">Invista na Colheita</p>
            <p className="text-xl md:text-2xl font-light tracking-wide">Apoie o Produtor</p>
            <p className="text-xl md:text-2xl font-light tracking-wide">Fortaleça a Agricultura</p>
            <p className="text-2xl md:text-4xl font-bold mt-6 tracking-wider drop-shadow-lg">Seja S.A.F.R.A.</p>
          </div>
        </div>
      </section>

      {/* Instituto Section */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            INSTITUTO AGRÔNOMO DE PERNAMBUCO ®
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground italic animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            S.A.F.R.A.: Sistema de Aquisição, Fiscalização e Rastreamento Agrícola
          </p>
        </div>
      </section>

      {/* Action Cards */}
      <section className="py-16 px-6 relative" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-secondary/90 to-background/95"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {actionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link
                  key={index}
                  to={card.link}
                  className="group bg-white rounded-2xl p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <p className="text-center font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{card.title}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-foreground leading-relaxed text-lg md:text-xl">
              O S.A.F.R.A. (Sistema de Aquisição, Fiscalização e Rastreamento Agrícola) tem como missão centralizar e otimizar 
              a logística de aquisição e distribuição de sementes e mudas de alta qualidade em Pernambuco.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-foreground leading-relaxed text-lg md:text-xl">
              Nosso sistema integra tecnologia e transparência, elementos chave do Rastreamento Agrícola, para assegurar que o 
              material chegue ao produtor rural no momento certo. Com um sistema digital de ponta para a gestão, estoque, 
              fiscalização, a plataforma oferece dados em tempo real para assegurar a procedência e a confiabilidade das entregas aos 
              campos.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
            <p className="text-foreground leading-relaxed text-lg md:text-xl">
              Por meio de parcerias estratégicas, facilitamos o acesso a insumos essenciais, promovendo o aumento 
              da produtividade e a segurança alimentar no estado, com foco na agricultura familiar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
