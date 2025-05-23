type IconProps = {
  color?: string;
  size?: number;
};

function MarkerIcon({ color, size }: IconProps) {
  const aspectRatio = 12 / 14;
  const adjustedWidth = size ? size * aspectRatio : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={adjustedWidth || "11"}
      height={size || "14"}
      viewBox="0 0 11 14"
      fill={color || "none"}
    >
      <path
        d="M5.5 0C2.4349 0 0 2.34927 0 5.24488C0 7.37561 0.744792 7.97659 4.92708 13.7132C5.1849 14.0956 5.78646 14.0956 6.04427 13.7132C10.2266 7.94927 11 7.37561 11 5.24488C11 2.34927 8.53646 0 5.5 0ZM5.5 7.43024C4.21094 7.43024 3.20833 6.44683 3.20833 5.24488C3.20833 4.01561 4.21094 3.05951 5.5 3.05951C6.76042 3.05951 7.79167 4.01561 7.79167 5.24488C7.79167 6.44683 6.76042 7.43024 5.5 7.43024Z"
        fill={color || "#ffffff"}
      />
    </svg>
  );
}

export default MarkerIcon;
