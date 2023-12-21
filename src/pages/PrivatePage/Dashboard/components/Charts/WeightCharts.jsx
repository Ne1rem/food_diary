import { Upper, WeightWrap, LowerWrap, UpperValue, LowerValue } from "./Charts.styled";

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
              <UpperValue key={index}>
                {value}
              </UpperValue>
            ))}
          </Upper>
          <LowerWrap>
            {lowerRowValues.map((value, index) => (
              <LowerValue key={index}>
                {value}
              </LowerValue>
            ))}
          </LowerWrap>
        </WeightWrap>
      </>
  );
};

export default WeightCharts;