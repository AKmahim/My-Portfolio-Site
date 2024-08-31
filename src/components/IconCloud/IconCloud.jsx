import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes"; // You may need to find a React-specific theme hook or manage the theme manually
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const slugs = [
    'c',
    'cpp',
    'amazonaws',
    'leetcode',
    'ubuntu',
    'linuxmint',
    'fedora',
    'windows',
    'postman',
    'python',
    'flask',
    'opencv',
    'openai',
    'mysql',
    'postgresql',
    'laravel',
    'php',
    'javascript',
    'ajax',
    'vue',
    'github',
    'git',
    'react',
    'nodejs',
    'express',
    'netlify',
    'gitbucket',
    'capacitor',
    'ionic',
    'electron',
    'reactnative',
    'androidstudio',
    'antdesign',
    'magicui',
    'materialui',
    'tailwindcss',
    'css3',
    '.ENV',
    'html5',
    'jwt',
    'firebase',
    'arduino',
    'axios',
    'codeforeces',
    'bugcrowd',
    'vercel',
    'visualstudiocode'
  ];

const IconCloud = ({ iconSlugs=slugs }) => {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
};

export default IconCloud;
