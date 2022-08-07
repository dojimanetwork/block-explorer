
import { linearGradientDef } from "@nivo/core";
import { ResponsiveLine } from "@nivo/line";

const data: any = [
  {
    id:"Transaction",
    data: [
      {
        x: "plane",
        y: 140,
      },
      {
        x: "helicopter",
        y: 80,
      },
      {
        x: "boat",
        y: 134,
      },
      {
        x: "train",
        y: 202,
      },
      {
        x: "subway",
        y: 143,
      },
      {
        x: "bus",
        y: 266,
      },
      {
        x: "car",
        y: 223,
      },
      {
        x: "moto",
        y: 100,
      },
    ],
  },
  {
    id: "Blocks",
    data: [
      {
        x: "plane",
        y: 267
      },
      {
        x: "helicopter",
        y: 192
      },
      {
        x: "boat",
        y: 259
      },
      {
        x: "train",
        y: 40
      },
      {
        x: "subway",
        y: 34
      },
      {
        x: "bus",
        y: 1
      },
      {
        x: "car",
        y: 100
      },
      {
        x: "moto",
        y: 194
      }
    ]
  }
];

const MyResponsiveLine = ({ data }: { data: any }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 30, bottom: 20, left: 35 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    colors={['#FF751F', '#8C59DA']}
    defs={[
      linearGradientDef("gradient", [
          { offset: 0, color: 'inherit' },
          { offset: 100, color: 'inherit', opacity: 0 },
      ]),
    ]}
    fill={[{ match: "*", id: ("gradient"),
  }]}
    enableArea={true}
    axisBottom={{
      tickSize: 0,
      tickPadding: 5,
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 10,
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={5}
    pointColor="#FFFFFF"
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    useMesh={true}
    enableGridX={false}
    lineWidth={1}
    areaBaselineValue={100}
    theme={{
      grid: { line: { stroke: "#2a2d2f", strokeDasharray: '6' } },
      axis: {
      ticks:{
       text:{
         fill:"#fafafa"
       }
      }}
    }
    }
  />
);

export default function ChainGraph() {
  return (
    <div style={{ width: "44.5vw", height: "40vh",border:"1px solid #2a2d2f", marginLeft:"2px",padding:"10px"}}>
      <MyResponsiveLine data={data} />
    </div>
  );
}
