import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a1a1a] to-[#E30611] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#E30611] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#E30611] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-8">
            <Icon name="Radio" size={80} className="text-[#E30611] animate-scale-in" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Корпоративное Радио
            <span className="block text-[#E30611] mt-2">для МТС</span>
          </h1>
          <div className="max-w-2xl mx-auto mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-xl mb-2 font-semibold">Автор проекта:</p>
            <p className="text-3xl font-bold text-[#E30611]">Тигран, 29 лет</p>
            <p className="text-lg mt-2 text-gray-300">Профессиональный диктор и радиоведущий</p>
          </div>
          <div className="mt-12">
            <Button 
              onClick={() => scrollToSection('goal')}
              size="lg"
              className="bg-[#E30611] hover:bg-[#c20510] text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              Узнать подробнее
              <Icon name="ChevronDown" size={24} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="goal" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#E30611] rounded-2xl flex items-center justify-center">
                <Icon name="Target" size={32} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold text-black">Цель проекта</h2>
            </div>
            <Card className="p-10 bg-white shadow-xl hover:shadow-2xl transition-shadow border-0">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Создание корпоративной интернет-радиостанции для:
              </p>
              <div className="space-y-6">
                {[
                  { icon: "Zap", text: "Оперативного донесения важной информации до сотрудников" },
                  { icon: "Users", text: "Укрепления корпоративной культуры" },
                  { icon: "Heart", text: "Формирования комфортной атмосферы для клиентов салонов связи МТС" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                    <div className="w-12 h-12 bg-[#E30611] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={item.icon} size={24} className="text-white" />
                    </div>
                    <p className="text-lg text-gray-800 pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="why-radio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#E30611] rounded-2xl flex items-center justify-center">
                <Icon name="Radio" size={32} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold text-black">Почему радио?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "Rocket", title: "Быстрая коммуникация", desc: "Информация доходит мгновенно" },
                { icon: "Headphones", title: "Удобный формат", desc: "Легко воспринимается на фоне" },
                { icon: "TrendingUp", title: "Вовлечение", desc: "Эмоциональная связь с аудиторией" },
                { icon: "Settings", title: "Гибкость", desc: "Интеграция музыки, новостей, обучения" }
              ].map((item, idx) => (
                <Card key={idx} className="p-8 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all hover:-translate-y-2 border-0">
                  <div className="w-14 h-14 bg-[#E30611] rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#E30611] rounded-2xl flex items-center justify-center">
                <Icon name="Package" size={32} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold">Что я предлагаю</h2>
            </div>
            <Card className="p-10 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#E30611] border-2 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-[#E30611] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl">Разработка и запуск интернет-радиостанции под брендом МТС</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-[#E30611] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl">Профессиональное ведение эфиров</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-[#E30611] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl mb-4">Создание контента:</p>
                    <div className="ml-8 space-y-2">
                      <p className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E30611] rounded-full"></span>
                        Новости компании
                      </p>
                      <p className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E30611] rounded-full"></span>
                        Интервью с сотрудниками
                      </p>
                      <p className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E30611] rounded-full"></span>
                        Мотивационные и обучающие рубрики
                      </p>
                      <p className="text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E30611] rounded-full"></span>
                        Музыкальные подборки
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-[#E30611] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl">Интеграция в корпоративную ИТ-инфраструктуру</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#E30611] rounded-2xl flex items-center justify-center">
                <Icon name="Mic2" size={32} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold text-black">Примеры рубрик</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: "Newspaper", 
                  title: "Утренний брифинг", 
                  time: "09:00",
                  desc: "Важные новости компании, анонсы акций, достижения команд"
                },
                { 
                  icon: "Users", 
                  title: "Голоса МТС", 
                  time: "13:00",
                  desc: "Интервью с сотрудниками о буднях, успехах и лайфхаках"
                },
                { 
                  icon: "Lightbulb", 
                  title: "Продуктовая пятиминутка", 
                  time: "15:00",
                  desc: "Обзоры новых продуктов, тарифов и технологий МТС"
                },
                { 
                  icon: "Music", 
                  title: "Музыкальный час", 
                  time: "17:00",
                  desc: "Подборки треков под настроение дня и пожелания сотрудников"
                },
                { 
                  icon: "Award", 
                  title: "Герои недели", 
                  time: "Пятница",
                  desc: "Награждение лучших сотрудников, истории успеха"
                },
                { 
                  icon: "BookOpen", 
                  title: "Обучающий подкаст", 
                  time: "Ежедневно",
                  desc: "Короткие уроки по продуктам, продажам и сервису"
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all hover:-translate-y-2 border-l-4 border-[#E30611]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#E30611] rounded-xl flex items-center justify-center">
                      <Icon name={item.icon} size={24} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold text-[#E30611] bg-red-50 px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Эффективность корпоративного радио</h2>
              <p className="text-xl text-gray-300">По данным исследований западных компаний</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  icon: "TrendingUp", 
                  value: "+35%", 
                  label: "Рост вовлечённости сотрудников"
                },
                { 
                  icon: "Users", 
                  value: "87%", 
                  label: "Сотрудников слушают регулярно"
                },
                { 
                  icon: "Clock", 
                  value: "-40%", 
                  label: "Время на рассылку информации"
                },
                { 
                  icon: "Heart", 
                  value: "+52%", 
                  label: "Улучшение атмосферы в офисах"
                }
              ].map((stat, idx) => (
                <Card key={idx} className="p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-[#E30611] border-2 hover:scale-105 transition-transform text-center">
                  <div className="w-16 h-16 bg-[#E30611] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon} size={32} className="text-white" />
                  </div>
                  <div className="text-5xl font-bold text-[#E30611] mb-2">{stat.value}</div>
                  <p className="text-gray-300 text-lg">{stat.label}</p>
                </Card>
              ))}
            </div>
            <div className="mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={24} className="text-[#E30611] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Корпоративное радио повышает скорость распространения информации, 
                    укрепляет командный дух и создаёт единое информационное пространство. 
                    Сотрудники чувствуют себя частью большой команды, клиенты — в комфортной атмосфере.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#E30611] rounded-2xl flex items-center justify-center">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold text-black">Преимущества для МТС</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E30611] rounded-xl flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-black">Для сотрудников</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Быстрая коммуникация",
                    "Повышение вовлечённости",
                    "Обучение и развитие"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white">
                      <Icon name="CheckCircle" size={20} className="text-[#E30611] flex-shrink-0" />
                      <p className="text-lg text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E30611] rounded-xl flex items-center justify-center">
                    <Icon name="Store" size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-black">Для клиентов</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Приятная атмосфера в салонах",
                    "Информирование о новинках и акциях",
                    "Уникальный опыт взаимодействия с брендом"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white">
                      <Icon name="CheckCircle" size={20} className="text-[#E30611] flex-shrink-0" />
                      <p className="text-lg text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#E30611] rounded-2xl flex items-center justify-center">
                <Icon name="ListChecks" size={32} className="text-white" />
              </div>
              <h2 className="text-5xl font-bold text-black">Следующие шаги</h2>
            </div>
            <div className="space-y-6">
              {[
                { num: "01", title: "Обсуждение формата и задач", icon: "MessageSquare" },
                { num: "02", title: "Техническое развёртывание", icon: "Settings" },
                { num: "03", title: "Запуск пилотного эфира", icon: "Radio" },
                { num: "04", title: "Анализ и масштабирование", icon: "TrendingUp" }
              ].map((step, idx) => (
                <Card key={idx} className="p-8 bg-gradient-to-r from-gray-50 to-white hover:shadow-xl transition-all hover:-translate-x-2 border-l-4 border-[#E30611]">
                  <div className="flex items-center gap-6">
                    <div className="text-6xl font-bold text-[#E30611] opacity-20">{step.num}</div>
                    <div className="w-12 h-12 bg-[#E30611] rounded-xl flex items-center justify-center">
                      <Icon name={step.icon} size={24} className="text-white" />
                    </div>
                    <p className="text-2xl font-semibold text-black">{step.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-black via-[#1a1a1a] to-[#E30611] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <Icon name="Phone" size={32} className="text-[#E30611]" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-6">Контакты</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
              <p className="text-3xl font-bold text-[#E30611] mb-2">Тигран</p>
              <p className="text-xl text-gray-300 mb-8">Профессиональный диктор и радиоведущий</p>
              <p className="text-lg mb-10 text-gray-200">Готов обсудить детали и запустить проект вместе с вами!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('https://wa.me/79867972407', '_blank')}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
                >
                  <Icon name="MessageCircle" size={24} className="mr-2" />
                  WhatsApp: +7 986 797 24 07
                </Button>
                <Button 
                  onClick={() => window.open('https://t.me/theovervoice', '_blank')}
                  className="bg-[#0088cc] hover:bg-[#006ba3] text-white text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
                >
                  <Icon name="Send" size={24} className="mr-2" />
                  Telegram: @theovervoice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Корпоративное Радио МТС. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;