
import { ResponsiveLine } from "@nivo/line";
import { inherits } from "util";

const data: any = [
  {
    id:"Transaction",
    color: "hsl(70, 70%, 50%)",
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
    color: "hsl(89, 70%, 50%)",
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
    margin={{ top: 20, right: 110, bottom: 20, left: 35 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    enableArea={true}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      //   orient: "bottom",
      tickSize: 0,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: 36,
      legendPosition: "middle",
    }}
    legends={[]}
    axisLeft={{
      //   orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ from: 'color', modifiers: [] }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    enableGridX={false}
    areaBaselineValue={100}
    theme={{
      grid: { line: { stroke: "hsl(70, 70%, 50%)", strokeDasharray: '6' } },
    }
    }
    // legends={[
    //   {
    //     anchor: "bottom-right",
    //     direction: "column",
    //     justify: false,
    //     translateX: 100,
    //     translateY: 0,
    //     itemsSpacing: 0,
    //     itemDirection: "left-to-right",
    //     itemWidth: 80,
    //     itemHeight: 20,
    //     itemOpacity: 0.75,
    //     symbolSize: 12,
    //     symbolShape: "circle",
    //     symbolBorderColor: "rgba(0, 0, 0, .5)",
    //     effects: [
    //       {
    //         on: "hover",
    //         style: {
    //           itemBackground: "rgba(0, 0, 0, .03)",
    //           itemOpacity: 1,
    //         },
    //       },
    //     ],
    //   },
    // ]}
  />
);

export default function ChainGraph() {
  return (
    <div style={{ width: "51.5vw", height: "40vh" }}>
      <MyResponsiveLine data={data} />
    </div>
  );
}
