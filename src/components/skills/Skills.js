import React, { useEffect, useState } from 'react';
import Style from './Skills.module.css'

const Skills = () => {
  const [svgData, setSvgData] = useState([]);

  useEffect(() => {
    const importAll = (requireContext) => requireContext.keys().map(requireContext);
    const svgFiles = importAll(require.context('../../assets/SvgSkills', true, /\.svg$/));

    const loadedSvgs = svgFiles.map((svgFile) => ({
      name: svgFile.split('/').pop().split('.')[0],
      path: svgFile,
    }));

    setSvgData(loadedSvgs);
  }, []);

  return (
    <div className={Style.container}>
      {svgData.map((svg, index) => (
        <div key={index} className={Style.item}>
          <img src={svg.path} alt={svg.name} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
