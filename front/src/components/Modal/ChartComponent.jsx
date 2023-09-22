import React, { Component } from "react";
import Chart from "chart.js/auto";
import "../../styles/ChartComponent.css";

class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        { name: "화곡동", congestion: "혼잡", population: "40,123명" },
        { name: "등촌동", congestion: "혼잡", population: "20,123명" },
        { name: "목동", congestion: "보통", population: "14,515명" },
        { name: "필동", congestion: "원할", population: "32,123명" },
      ],
      chartData: [
        [21, 19, 25, 20, 23, 26, 25, 13, 15, 19],
        [18, 20, 22, 25, 28, 31, 34, 32, 28, 20],
        [15, 17, 20, 22, 26, 30, 35, 38, 36, 30],
        [20, 22, 24, 26, 30, 32, 35, 37, 39, 40],
      ],
    };

    this.chartRefs = this.state.chartData.map(() => React.createRef());
    this.charts = this.state.chartData.map(() => null);
  }

  componentDidMount() {
    this.createCharts();
  }

  componentWillUnmount() {
    // 컴포넌트가 해제될 때 모든 차트를 파괴
    this.charts.forEach((chart) => {
      if (chart) {
        chart.destroy();
      }
    });
  }

  createChart = (index, data) => {
    const canvasId = `myChart${index + 1}`;

    // 이전 차트 파괴
    if (this.charts[index]) {
      this.charts[index].destroy();
    }

    // 새 차트 생성
    this.charts[index] = new Chart(document.getElementById(canvasId), {
      type: "line",
      data: {
        labels: ["0", "3", "6", "9", "12", "15", "18", "21", "24"],
        datasets: [
          {
            label: "인구밀집도",
            fill: false,
            data: data,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(0, 0, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "시간",
            },
            grid: {
              display: true,
            },
          },
          y: {
            title: {
              display: true,
              text: "천 단위",
            },
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
        animation: {
          easing: "easeInOutQuad",
        },
      },
      id: `chart${index + 1}`,
    });
  };

  createCharts = () => {
    this.state.chartData.forEach((data, index) => {
      this.createChart(index, data);
    });
  };

  // 테이블 데이터 수정
  updateTableData = () => {
    // 데이터를 변경할 때 테이블 데이터를 업데이트하고 차트 업데이트
    const newTableData = [
      { name: "화곡1동", congestion: "혼잡", population: 1234567 },
      { name: "역촌동", congestion: "혼잡", population: 2345678 },
      { name: "증관동", congestion: "보통", population: 3456789 },
      { name: "길동", congestion: "원할", population: 4567890 },
    ];

    const newChartData = [
      [12, 15, 18, 22, 25, 29, 30, 28, 20, 15],
      [18, 20, 22, 25, 28, 31, 34, 32, 28, 20],
      [15, 17, 20, 22, 26, 30, 35, 38, 36, 30],
      [20, 22, 24, 26, 30, 32, 35, 37, 39, 40],
    ];

    this.setState({ tableData: newTableData, chartData: newChartData });

    newChartData.forEach((data, index) => {
      this.createChart(index, data);
    });
  };

  render() {
    const tableStyle = {
      textAlign: "center",
      width: "100%",
      margin: "auto",
      marginTop: "-50px",
      border: "2.5px solid #D9D9D9",
    };

    return (
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          {this.chartRefs.map((chartRef, index) => (
            <div key={index}>
              <canvas ref={chartRef}></canvas>
            </div>
          ))}
        </div>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th colSpan="2">장소명</th>
              <th>혼잡도</th>
              <th>실시간 인구</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((rowData, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td colSpan="2">{rowData.name}</td>
                  <td>{rowData.congestion}</td>
                  <td>{rowData.population}</td>
                </tr>
                <tr>
                  <td colSpan="5">
                    <div className="container">
                      <div className="row">
                        <div>
                          <canvas id={`myChart${index + 1}`}></canvas>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ChartComponent;
