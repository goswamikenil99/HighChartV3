import Header from "../Header";
import Sidebar from "../Sidebar";
import MainSection from "../MainSection";

const Home = () => {
  // console.log(chartData.heatmapChart)
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
