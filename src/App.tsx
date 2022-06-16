import "./App.css";

export default function App() {
  const color = ["#e6c2b7", "#c68b7a", "#815453", "#3a2231"];
  function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  function rgb2hsv(r: number, g: number, b: number) {
    let rabs,
      gabs,
      babs,
      rr,
      gg,
      bb,
      h,
      s,
      v: number,
      diff: number,
      diffc,
      percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    (v = Math.max(rabs, gabs, babs)), (diff = v - Math.min(rabs, gabs, babs));
    diffc = (c: number) => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = (num: number) => Math.round(num * 100) / 100;
    if (diff == 0) {
      h = s = 0;
    } else {
      s = diff / v;
      rr = diffc(rabs);
      gg = diffc(gabs);
      bb = diffc(babs);

      if (rabs === v) {
        h = bb - gg;
      } else if (gabs === v) {
        h = 1 / 3 + rr - bb;
      } else if (babs === v) {
        h = 2 / 3 + gg - rr;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return {
      h: Math.round(h * 360),
      s: percentRoundFn(s * 100),
      v: percentRoundFn(v * 100),
    };
  }
  const test = hexToRgb("#e6c2b7");
  console.log(test);
  const test2 = rgb2hsv(test.r, test.g, test.b);
  console.log(test2);
  console.log("result")
  console.log(test2.h, 30 + 0.6 * test2.s, 20 + 0.5 * test2.v);
  return (
    <div className="app">
      {color.map((i) => {
        return (
          <div key={i}>
            <div className="test" style={{ background: i }}></div>
            <p style={{ color: i }}>{i}</p>
          </div>
        );
      })}
      <div>{}</div>
    </div>
  );
}
