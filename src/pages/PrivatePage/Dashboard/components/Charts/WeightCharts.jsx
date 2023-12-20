import { Upper, WeightWrap, LowerWrap } from "./Charts.styled";

const WeightCharts = () => {
  const upperRowValues = Array.from({ length: 31 }, () =>
    (Math.random() * (80 - 60) + 60).toFixed(0)
  );
  const lowerRowValues = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString()
  );

  return (
      <>
        <WeightWrap>
          <Upper>
            {upperRowValues.map((value, index) => (
              <div key={index}>
                {value}
              </div>
            ))}
          </Upper>
          <LowerWrap>
            {lowerRowValues.map((value, index) => (
              <div key={index}>
                {value}
              </div>
            ))}
          </LowerWrap>
        </WeightWrap>
      </>
  );
};

export default WeightCharts;