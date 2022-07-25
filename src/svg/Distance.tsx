import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={90}
    height={90}
    fill="none"
    {...props}
  >
    <Path
      d="M45 90c24.853 0 45-20.147 45-45S69.853 0 45 0 0 20.147 0 45s20.147 45 45 45Z"
      fill="#FFE6EE"
    />
    <Path
      d="M22.26 45.314c-.139.622.138 1.383.691 1.728.07.07.138.07.138.139.07.069.07.138.07.207 0 .276 0 .691-.277.76-.07.07-.207.07-.277.07-.345.138-.414.553-.414.898 0 .277.069.553.276.76.277.139.622.07.899-.069.76-.345 1.52-.76 1.797-1.52.208-.484.139-.968.07-1.452-.07-.691-.139-1.452-.277-2.143l-2.696.622ZM5.6 45.245c-.76.553-.968 1.728-.623 2.627.07.138.07.207.139.346.207.483.622.898 1.037 1.175.414.276.898.345 1.382.345.07 0 .07 0 .138-.069v-.138a4.319 4.319 0 0 0-.69-1.52c.137.068.276 0 .414-.14.069-.137.138-.276.138-.414.07-.691.07-1.383-.138-2.005-.07 0-.208.07-.277.07l-1.52-.277ZM17.628 76.768v.277c-.346 3.456-.553 4.493.899 5.323 1.52.83 1.037 2.143 2.834 2.488 1.797.346 3.595-.207 3.664-1.106.07-.898-1.175-1.313-2.212-3.18-1.037-1.797-1.452-3.871-1.452-3.871l-3.733.07Z"
      fill="#fff"
    />
    <Path
      d="M19.702 78.704c0 .899.553 1.728 1.244 2.35.692.622 1.521 1.106 2.074 1.798.208.276.415.553.415.898 0 .553-.622.968-1.106 1.245.484-.139 1.037-.208 1.52-.346.416-.07.9-.207 1.107-.622.207-.346.069-.83-.207-1.175-.277-.346-.623-.553-.9-.9-.483-.552-.76-1.243-1.036-1.935-.207-.553-.415-1.106-.691-1.659-.139-.346-.346-.76-.692-.76l-1.728 1.106Z"
      fill="#E1E1FF"
    />
    <Path
      d="M7.328 77.598c.138 2.074-.622 4.562-1.59 5.737-.968 1.176-1.729 2.627.76 3.042 2.558.484 3.872-1.313 3.94-2.558.07-1.244 1.59-1.728 1.59-2.972-.069-1.244 0-2.489 0-2.489l-4.7-.76Z"
      fill="#fff"
    />
    <Path
      d="M8.434 79.326c.276.484 1.106.277 1.452.622.138.208.207.415.138.691-.07.346-.208.692-.346 1.037-.415.9-.83 1.867-1.452 2.627-.622.76-1.59 1.383-2.627 1.383 1.245.691 3.042.553 3.94-.622.208-.277.347-.622.554-.968.484-.83 1.106-1.52 1.52-2.35.416-.83.623-1.936.07-2.697a.524.524 0 0 1-.277.139l-2.972.138Z"
      fill="#E1E1FF"
    />
    <Path
      d="m4.493 45.729 3.111.207 1.037-3.041c2.212 1.659 9.471.69 10.37.69.898 0 2.281-.621 2.281-.621l.207 2.074s2.766.622 4.632-.968c-.553-4.079-2.489-19.357-3.11-21.223-.623-1.867-1.798-3.94-5.67-4.701-.69 2.42-3.732 2.212-6.152.691-3.664.968-5.046 3.25-5.6 5.393-.553 2.142-.967 12.789-.967 12.789l-.139 8.71Z"
      fill="#77F"
    />
    <Path
      d="m8.434 25.681-.83 5.185c-.622 4.7-1.037 9.402-1.106 14.172 0 .345 0 .69.277.898.276.277.76.139 1.037-.138.276-.276.345-.691.414-1.106.277-1.452.415-2.904.346-4.424L8.434 25.68ZM23.85 45.107s0-.07 0 0c.069-2.212-.346-4.494-.622-6.706-.139-1.59-.415-3.11-.553-4.7-.139-1.798-.208-3.596-.346-5.324-.07-.83-.138-1.659-.207-2.42-.139-.898-.415-1.727-.623-2.626-.276-.899-.483-1.729-1.037-2.489-.345-.484-.76-.899-1.244-1.313-.138-.139-1.797-1.314-1.659-1.452 0 0-.968 1.797-2.696 1.935.484-.069.83 1.66 1.037 2.005.345.76.83 1.245 1.037 2.074.345 1.037.553 2.074.691 3.111.346 2.143.553 4.217.691 6.36.139 1.728.277 3.526.415 5.254.138 2.143-.622 3.11-1.659 4.77 1.314.138 2.904-.346 4.217-.553l.276 2.074c-.069.069 1.521.276 2.282 0Z"
      fill="#6363EB"
    />
    <Path
      d="M19.84 10.818c0 .76-.691 1.106-1.382.968-.208 0-.346.07-.346.277 0 2.004-1.452 3.249-3.18 3.802-.07 0-.138.138-.138.207v.138c0 .07.069.139.207.07.346-.07.622-.139.899-.208h.069v.83c.07.276.207.553.415.76.207.207.415.277.691.415-.207.415-.415.83-.83 1.037-.483.276-1.106.415-1.728.415h-.069c-.968 0-1.936-.346-2.627-.968.277-.139.484-.346.622-.622.139 0 .208-.07.277-.208.069-.415 0-.83-.138-1.313-.07-.208-.07-.415-.139-.622.277.138.623.207.968.207.139 0 .277-.138.208-.277 0-.069 0-.138-.07-.138 0 0-.069 0-.069-.069-1.728-.484-2.903-1.728-2.903-3.526 0-.207-.207-.276-.346-.276-.622.138-1.382-.277-1.382-.968s.76-1.037 1.313-.622c.207.138.415-.07.415-.277v-.138c.069 0 .138-.069.069-.138 0-.277-.07-.484-.138-.76V5.771c.069-.07.069-.07.069-.138.069-.208.069-.484.138-.692 0-.069 0-.138.07-.207v-.07c1.866.692 3.94.969 5.944.761.346 0 .692-.069 1.037-.207.139.069.277.138.415.138V9.85c0 .208.277.415.415.277.484-.346 1.244 0 1.244.691Z"
      fill="#fff"
    />
    <Path
      d="M17.559 18.077c-.691 1.244-2.143 1.935-3.526 1.728.139-.069.277-.138.346-.207.138-.139.207-.277.277-.415.138-.277.138-.622.138-.968V16.28c0 .07.069.139.207.07.346-.07.622-.139.899-.208v.208c.207.76.83 1.451 1.659 1.728ZM19.84 10.818c0 .76-.691 1.106-1.382.968-.208 0-.346.07-.346.277 0 2.004-1.452 3.249-3.18 3.802-.07 0-.138.138-.138.207-.415 0-.83-.069-1.245-.276-.069-.07-.207-.07-.276-.139h.207c.968-.069 1.867-.484 2.627-1.106.76-.691 1.245-1.659 1.383-2.696.207-1.728-.553-3.456-.415-5.254-.691.415-1.59.484-2.42.346-.829-.138-1.59-.484-2.35-.83-.622-.276-1.244-.69-1.659-1.175 0-.069 0-.138.07-.207v-.07c1.866.692 3.94.969 5.944.761.346 0 .692-.069 1.037-.207.139.069.277.138.415.138V9.85c0 .208.277.415.415.277.553-.346 1.313 0 1.313.691Z"
      fill="#E1E1FF"
    />
    <Path
      d="M12.72 8.952v-.139c0-.069-.07-.138-.138-.207-.07-.069-.139-.069-.208 0-.069 0-.138.07-.207.138a1 1 0 0 0-.07.76c0 .07.07.14.139.208.069.07.138.07.207 0 .07 0 .139-.069.208-.138.069-.07.069-.138 0-.207V9.09c.069 0 .069-.07.069-.138l-.07.138.07-.138ZM16.384 8.744c-.07-.069-.138-.069-.208-.069-.069 0-.138 0-.207.07-.07.068-.07.138-.07.207v.553c0 .069.07.207.07.207.07.07.138.07.207.07.07 0 .208 0 .208-.07.069-.069.069-.138.069-.207v-.553c0-.07 0-.139-.07-.208ZM12.65 7.293c-.276 0-.483 0-.76.069-.276.069-.484.207-.69.414-.07.07-.07.139 0 .208.068.069.137.069.207.069.207-.138.345-.207.553-.277.138-.069.207-.069.345-.069h.277c.069 0 .207-.069.207-.207.07-.07 0-.138-.138-.207ZM15.762 7.638c.138 0 .276.07.414.07.277.068.484.207.692.414.138.138.415-.069.276-.276-.207-.208-.484-.346-.83-.415a.44.44 0 0 0-.414 0c-.138 0-.277.069-.415.138v.07c0-.07.138-.07.277 0ZM15.347 13.1a1.524 1.524 0 0 1-1.037.414c-.415.07-.83 0-1.175-.276-.07-.07-.208 0-.277.069-.069.07 0 .207.07.277.414.276.898.414 1.382.414.553 0 .968-.207 1.382-.622.208-.138-.069-.484-.345-.276ZM13.895 12.616h.346c.138 0 .276 0 .345-.07.139-.069.208-.069.346-.138.07-.069.138-.138.07-.207-.07-.07-.14-.138-.208-.138-.139 0-.139 0-.277.069-.138 0-.207.069-.345.069h-.277c-.07 0-.138 0-.207.069l-.07.207.07.139h.207Z"
      fill="#372B7B"
    />
    <Path
      d="M21.707 78.15c-1.383.346-2.696.415-4.148.139-.553-4.355-.899-8.71-1.314-13.135-.207-2.35-.345-4.7-.622-6.982-.138-1.866-.276-3.94-.69-5.738.068-.207.068-.414.068-.69 0-.346.07-.692.07-1.038 0-.622.069-1.313.069-1.936v-1.935c0-.622.069-1.383-.208-1.936h-.07c-.207.622-.137 1.314-.137 1.936 0 .622-.07 1.313-.07 1.935 0 .623 0 1.314-.069 1.936 0 .346 0 .691-.069 1.037v.553c-.484 1.867-.553 3.94-.691 5.807a3170.97 3170.97 0 0 1-.622 7.397c-.415 4.493-.76 8.987-1.314 13.48-1.382.277-2.765.208-4.147-.138.483-9.402.622-18.803.898-28.205.07-2.42.208-4.77.208-7.19.207.139.414.208.69.277 1.314.277 2.628.415 3.941.484 2.489.138 4.978-.138 7.328-.691 0 5.737.277 11.475.415 17.213.069 5.876.207 11.614.484 17.42Z"
      fill="#473F97"
    />
    <Path
      d="M14.794 44S11.959 67.09 11.82 69.58c-.138 2.488-2.074 10.093-1.797 10.093.276 0 1.728-.623 1.728-.623l3.042-26.269V44Z"
      fill="#372B7B"
    />
    <Path
      d="M14.794 44.346v8.365c0 .276 0 .553.069.83.069.345.276.69.415.967 1.382 2.627 1.866 5.6 2.35 8.503.277 1.66.484 3.318.76 4.978.554 3.594 1.107 7.19 1.59 10.784.76-.07 1.521-.207 2.282-.277-.346-5.046-.484-10.093-.484-15.14v-3.594c-.138-5.53-1.106-11.06-1.037-16.591-2.074.484-4.217.691-6.29.553l.345.622Z"
      fill="#372B7B"
    />
    <Path
      d="M26.338 43.793c-.967-5.323-1.797-10.577-2.42-15.969-.276-2.212-.414-4.839-1.658-6.844-.484-.76-1.175-1.382-2.005-1.866-.76-.415-1.866-1.037-2.765-1.037v-.346c0-.138-.207-.207-.346-.138-.415-.138-.76-.415-.898-.83-.07-.207-.07-.414-.07-.69 0-.07.07-.14.07-.208 1.244-.692 2.143-2.005 2.28-3.457.969 0 1.867-.622 1.729-1.659-.07-.899-.968-1.383-1.728-1.175v-.07c.276-.483.553-.967.83-1.52.276-.484.552-1.037.622-1.59.138-.691-.07-1.452-.553-1.867.069-.069.069-.207.069-.276.553-.484.76-1.037.553-1.728-.277-1.037-1.245-1.66-2.282-1.936A9.696 9.696 0 0 0 14.31.172a7.021 7.021 0 0 0-3.042.899c-.415.276-.76.553-1.106.899-.346.345-.553.83-.83 1.244-.138.207-.345.207-.622.415a1.075 1.075 0 0 0-.414.553c-.208.553-.139 1.106.069 1.659.207.622.484 1.313.76 1.935.208.484.415 1.037.622 1.521v.277c-.76-.208-1.659.345-1.728 1.175-.07 1.037.76 1.728 1.728 1.66.139 1.313.83 2.626 2.005 3.248 0 .139.07.208.07.277.068.207.068.415.138.622.069.346.069.622.069.968-.139.345-.484.691-.9.691-.137 0-.207.07-.276.207-2.212.9-4.286 2.005-5.184 4.287-1.037 2.35-1.106 5.046-1.176 7.604-.069 3.11-.345 6.29-.483 9.402-.07 1.659-.208 3.318-.139 4.908 0 .345-.069.691.208.898.207.139.484.277.76.346-.07.138-.207.346-.207.484-.07.276-.07.553-.07.76 0 .553.139 1.107.484 1.59.277.415.692.83 1.176 1.037.345.208 1.037.484 1.382.208v-.07c.07-.069.139-.138.07-.207-.07-.345-.208-.622-.346-.898-.07-.139-.208-.277-.277-.415l-.069-.07c.138-.069.277-.138.415-.276.276-.346.276-.76.207-1.175-.069-.208-.069-.415-.138-.622v-.346c0-.138.07-.207.07-.346l-.14-.069-.068-.069c-.208-.069-.484-.069-.76-.069h-.554c-.207-.07-.415-.07-.691-.138-.138 0-.277-.07-.415-.139-.345 0-.484-.138-.345-.483-.139-.553 0-1.383 0-1.936 0-1.383.069-2.765.138-4.148.138-2.696.345-5.392.415-8.088.069-2.35.138-4.77.898-7.051.83-2.489 2.835-3.595 5.116-4.563.899.968 2.212 1.521 3.525 1.452.76 0 1.521-.207 2.144-.691.276-.208.483-.484.622-.83.069-.138.138-.346.138-.484.76.553 1.866.76 2.627 1.244 1.106.692 1.797 1.729 2.212 2.973.76 2.35.968 4.84 1.175 7.259.484 4.77 1.314 9.54 2.212 14.31-1.037.622-2.212.967-3.456 1.037l-.138-.139c-.07 0-.208 0-.208.139h-.345c-.07-.554-.139-1.176-.208-1.729.139-.138.07-.345-.069-.484v-.207c-.138-2.973-.346-5.876-.484-8.849-.069-1.52-.207-3.11-.276-4.631-.07-1.452-.07-3.042-.415-4.494 0-.069-.138-.069-.138 0-.208 1.59 0 3.25.069 4.84.069 1.52.138 2.972.207 4.493l.415 8.918c-2.281.552-4.563.898-6.913.829-1.244 0-2.558-.138-3.802-.346-.277-.069-.691-.069-.968-.207-.415-.207-.415-.484-.484-.899-.069-.622 0-1.244 0-1.866V32.94c0-2.489.207-5.116-.138-7.604 0-.07-.138-.07-.138 0-.415 2.765-.208 5.737-.277 8.502.277 2.835.277 5.67.277 8.572 0 .415.069.692.207.83-.484 4.493-.484 9.125-.622 13.688-.138 4.908-.277 9.747-.484 14.655-.07 2.489-.208 5.047-.346 7.535v.139A11.563 11.563 0 0 1 5.6 82.85c-.346.554-.692 1.037-.9 1.66-.137.484-.276 1.106.277 1.382.553.346 1.314.484 1.936.553.622.07 1.244 0 1.797-.207.553-.208.968-.553 1.314-.968.415-.553.484-1.244.899-1.797.414-.623.898-1.037 1.175-1.729.207-.69.276-1.382.138-2.074v-.069c.622-4.562 1.037-9.194 1.383-13.826.207-2.488.414-4.977.622-7.396.138-1.176.276-2.42.415-3.664.138 1.175.276 2.35.345 3.525.208 2.42.415 4.77.622 7.19.346 4.493.76 8.987 1.314 13.411 0 .138.138.207.276.207-.069.622-.138 1.176-.069 1.798.07.622.277 1.037.76 1.382.277.139.554.277.761.484.207.208.415.484.553.76.346.485.622.969 1.106 1.314 1.037.622 2.35.415 3.457.208.553-.139 1.106-.208 1.244-.83.138-.553-.207-1.037-.622-1.452a12.864 12.864 0 0 1-1.452-1.935c-.415-.692-.691-1.383-.968-2.143.07-.07.07-.139.07-.208-.277-5.876-.415-11.752-.623-17.628-.138-5.738-.138-11.545-.691-17.282h.138c.07.622.07 1.313.139 1.935 0 .277.483.346.483 0h.277c0 .277 0 .622.138.899.07.207.138.415.277.553.138.207.276.346.484.484h.069v.484c0 .069.069.207.207.207.691 0 1.244-.691 1.106-1.382 0-.07-.138-.139-.207-.139-.07 0-.139.139-.139.208.07.415-.276.83-.622.898v-1.106c0-.345 0-.691-.069-1.037.277 0 .553-.069.76-.069.277-.069.554-.138.83-.276 0 .76.07 1.451.07 2.212.069.691.069 1.313-.554 1.797-.415.346-1.037.484-1.59.622-.345.07-.553 0-.553-.345 0-.277 0-.484.07-.76 0-.139-.139-.208-.208-.07-.276.484-.484 1.245.07 1.59.345.208.76.07 1.105-.069.346-.069.622-.207.968-.346.691-.345 1.106-.898 1.106-1.728 0-.484-.069-.968-.069-1.452-.07-.553-.07-1.037-.138-1.52.276-.139.622-.277.898-.415.139 0 .277-.07.277-.138.622-.346.553-.692.276-.76ZM6.706 45.867c.138 0 .345.07.483.07v.621c.07.346.139.692.07 1.037-.07.208-.208.415-.415.415-.07 0-.138 0-.208-.07-.069-.137-.069-.345-.069-.483v-1.383c.07-.069.139-.138.139-.207Zm-1.452.07c.415.068.76.137 1.106.207-.07.483-.07.898-.138 1.313 0 .207-.07.415.069.622.069.139.207.277.415.277h.138l.138.207c.07.138.138.277.207.346l.208.622c-.07 0-.138 0-.208-.07a4.763 4.763 0 0 1-.553-.207c-.414-.207-.69-.553-.967-.898-.623-.692-.623-1.59-.415-2.42Zm10.992-26.823c-.484.276-1.107.415-1.729.415a4.342 4.342 0 0 1-2.765-.968c.277-.139.484-.346.622-.622.138 0 .208-.07.277-.208.069-.415 0-.83-.139-1.244-.069-.207-.069-.415-.138-.622.277.138.622.207.968.207.277 0 .346-.415.07-.484-1.73-.484-2.904-1.728-2.904-3.525 0-.208-.208-.346-.346-.277-.622.138-1.383-.207-1.383-.968 0-.691.76-1.037 1.314-.622.207.138.415-.07.415-.277v-.207c.069 0 .069-.069.069-.138 0-.277-.07-.484-.07-.76V5.771l.07-.139c.069-.276.138-.553.138-.898v-.07c1.867.692 3.94 1.038 5.945.761.346 0 .692-.07 1.037-.207.139.069.277.138.415.138-.07.415 0 .76 0 1.175V9.85c0 .208.277.415.415.277.553-.415 1.313-.07 1.313.622 0 .691-.76 1.106-1.382.968-.208 0-.346.069-.346.276 0 1.936-1.452 3.25-3.25 3.803-.207.069-.207.483.07.483.346-.069.691-.138.968-.276-.07.276-.07.553 0 .83.069.276.207.553.415.76.207.207.414.346.69.415-.137.484-.414.898-.76 1.106Zm-4.701 62.355c-.208.553-.553.968-.899 1.383-.691.83-.76 2.073-1.728 2.696-1.037.622-2.35.414-3.457 0-.138-.07-.276-.07-.345-.208-.07-.138 0-.346 0-.484.069-.276.207-.553.345-.83.277-.483.622-.967.899-1.52.484-.968.83-2.005 1.037-3.111 1.382.346 2.834.415 4.286.207v.208c.07.553.07 1.106-.138 1.659Zm11.683.207c.345.484.69.899 1.037 1.314.207.207.414.415.414.691.07.415-.276.553-.553.622-.968.277-2.212.553-3.18.07-.968-.485-1.175-1.59-2.004-2.213-.208-.138-.484-.276-.692-.415-.345-.207-.484-.484-.553-.83-.138-.621-.069-1.313-.138-1.935v-.069a10.51 10.51 0 0 0 4.148-.207c.345 1.037.898 2.074 1.52 2.972ZM21.154 60.8c.138 5.807.276 11.614.553 17.352-1.383.345-2.765.415-4.148.138-.553-4.355-.899-8.71-1.314-13.135-.207-2.35-.345-4.7-.622-7.051-.138-1.867-.276-3.94-.691-5.738.07-.207.07-.415.07-.691 0-.346 0-.691.068-1.037 0-.622.07-1.313.07-1.936v-1.935c0-.622 0-1.383-.208-1.936h-.07c-.207.622-.137 1.314-.137 1.936 0 .622-.07 1.313-.07 1.935 0 .623 0 1.314-.069 1.936 0 .346 0 .691-.069 1.037 0 .207-.069.415 0 .553-.484 1.867-.553 3.94-.76 5.807-.208 2.489-.415 4.977-.622 7.397-.415 4.493-.76 8.987-1.314 13.48-1.382.277-2.765.207-4.148-.138.484-9.402.623-18.803.9-28.205.068-2.42.206-4.84.206-7.19.208.139.415.208.692.277 1.313.276 2.627.415 3.94.484 2.489.138 4.978-.139 7.328-.692 0 5.807.276 11.614.415 17.352Zm1.797-14.24v.276c-.346-.415-.553-.83-.553-1.383h.553v1.106Z"
      fill="#372B7B"
    />
    <Path
      d="m11.752 2.177.207.07c.346-.07.623-.208.968-.277.346-.07.623-.139.968-.208.346 0 .622-.069.968 0 .346 0 .691.07.968.07.276 0 .345-.415.069-.554-.622-.138-1.383-.138-2.074 0-.691.07-1.452.277-2.005.622-.069.07-.069.139-.069.277ZM17.559 2.108c0-.208-.07-.346-.07-.553l-.068.069-.139.07V2.038l.07.069H17.559l.138-.07.07-.068.069-.07V1.693l-.07-.138-.069-.07-.138-.068h-.138l-.07.069-.069.207V1.901l.07.138.069.069h.138ZM76.665 71.169l.553 6.636s-.76-.415-.899 1.313c-.207 1.729-.276 2.628.76 3.111 1.038.484 1.937 2.074 2.282 2.213.346.138 1.106 1.106 2.973.622 1.866-.484 1.659-.968 1.313-1.728-.346-.761-2.281-2.213-2.558-3.734-.276-1.52-1.451-1.935-1.451-1.935l.276-6.982-3.249.484Z"
      fill="#fff"
    />
    <Path
      d="m78.324 71.307.415 6.567s.276.07.968.692c.691.622 1.52 3.18 1.797 3.733.277.553 1.521.967.691 1.659-.76.69-2.765.553-2.765.553s.622.968 2.973.622c2.35-.346 1.935-.899 1.313-1.728-.622-.83-2.004-2.627-2.557-3.733-.553-1.106-.553-1.521-1.452-1.936.276-4.148.207-6.775.207-6.775l-1.59.346Z"
      fill="#E1E1FF"
    />
    <Path
      d="M67.955 71.03c-.277.346-.484 6.015-.484 6.015s-1.037-.139-1.59 1.659c-.553 1.797-.899 3.733-1.936 5.046-1.037 1.314-.276 2.489 1.314 2.489s2.972.069 3.664-2.005c.69-2.074 1.52-1.313 1.728-3.11.346-2.904-.553-2.49-.553-2.49l.898-7.465-3.041-.139Z"
      fill="#fff"
    />
    <Path
      d="M63.53 85.064c.553.207 1.245.345 1.867.276.207 0 .484-.069.691-.207.139-.138.277-.346.346-.553.76-1.728 1.728-3.457 2.834-4.977.07-.139.208-.277.138-.415-.069-.415-.622-.346-.76-.623-.207-.345 0-1.106 0-1.451.07-1.175.276-2.282.415-3.457.138-.76.276-1.451.415-2.143.484 0 1.037-.207 1.451-.207-.898 2.074-.345 4.424-.76 6.636-.07.277-.138.553-.207.76.207-.138.414.277.483.554.07.691.07 1.451.07 2.143 0 .207 0 .484-.07.691-.138.346-.345.553-.553.83a9.883 9.883 0 0 0-.968 1.382 6.304 6.304 0 0 1-.552.899c-.484.622-1.245.899-2.005.899-.76.069-1.521-.139-2.282-.346l-.553-.691Z"
      fill="#E1E1FF"
    />
    <Path
      d="M81.573 45.314c-.069.691.346 1.383.968 1.59.07.207.07.484.07.691a.825.825 0 0 1-.346.622c-.07.07-.208.07-.277.139-.346.207-.415.691-.415 1.106 0 .138 0 .276.07.345.069.07.207.07.345.07.622-.07 1.244-.277 1.867-.553 1.52-.692 1.175-3.388.345-4.425-.276.07-2.627.277-2.627.415ZM64.567 45.452c-.345.139-.414.553-.414.899 0 .76.138 1.59.553 2.212.483.76 1.382 1.244 2.28 1.314 0-.553-.207-1.176-.621-1.59.207 0 .415-.208.553-.415.069-.208.138-.484.138-.691 0-.484-.07-.968-.207-1.452-.415-.208-.899-.346-1.314-.346l-.968.07Z"
      fill="#fff"
    />
    <Path
      d="M68.024 42.825c-.138-.138-.553 28.274-.553 28.274s2.972.692 4.562.139c1.245-13.135 2.42-18.873 2.42-18.873l1.244 18.596s1.452 1.175 4.355-.276c.139-5.53.346-27.376.346-27.376s-9.401 2.143-12.374-.484Z"
      fill="#77F"
    />
    <Path
      d="m74.107 44.139.899 4.217s2.212 4.493 2.42 6.774c.207 2.282 1.175 4.84.553 5.116-.553.277-2.005.553-1.245.899.76.345 1.106.484 1.106.484l.139 9.816 2.143-.138.207-27.998c.07-.069-4.01 1.66-6.222.83ZM69.821 71.307s.968-8.365.968-9.194c0-.83-.968-1.106-1.452-1.66-.484-.553 1.175.277 1.59-.414.415-.692 1.798-7.052 2.143-9.195.346-2.143 1.245-4.424 1.245-4.424l.276 6.913-2.558 17.905-2.212.069Z"
      fill="#6363EB"
    />
    <Path
      d="M63.669 45.314c2.143.553 4.078.277 4.078.277l.277-2.697s1.866 1.314 5.876 1.245c4.01-.07 6.775-1.175 6.775-1.175l.484 2.488s1.935.139 4.355-1.244c-.553-4.217-2.005-13.273-2.212-15.001-.208-1.66-.553-5.047-1.314-7.328-.76-2.281-4.977-3.871-4.977-3.871s-1.245 6.567-1.798 8.295c-.553 1.729-1.037 3.94-1.037 3.94l-2.627-7.88c-.483-1.52-.345-3.042-.345-3.042l-.899-.968s-3.664 1.383-4.977 4.563c-1.106 3.25-1.314 13.065-1.314 13.065l-.345 9.333Z"
      fill="#473F97"
    />
    <Path
      d="M79.361 10.818c0 .76-.76 1.106-1.382.968-.208-.07-.346.07-.346.277 0 .898-.691 1.659-1.244 2.35-.553.622-1.106 1.244-1.521 1.936-.138.207.207.483.345.276l.139-.138c0 .138 0 .276.069.415.069.276.207.553.414.76.208.207.415.277.692.415-.138.415-.415.83-.83 1.037-.484.276-1.106.415-1.728.415-.968 0-2.005-.346-2.765-.968.276-.139.484-.346.622-.622.138 0 .207-.07.277-.208.069-.415 0-.899-.139-1.313-.069-.139-.069-.346-.138-.484l.207.207c.208.208.484-.069.346-.276-.691-1.314-2.42-2.282-2.489-3.872 0-.207-.207-.276-.345-.276-.623.138-1.383-.208-1.383-.968 0-.691.76-1.037 1.314-.622.207.138.414-.07.414-.277v-.138c.139-.069.208-.138.208-.276-.208-1.452-.208-2.973-.07-4.425.277.208.554.346.9.484.345.208.69.415 1.036.553.484.208 1.106.208 1.383-.276.138-.208.207-.415.207-.622 1.175.83 2.696 1.659 4.01 1.244 0 1.175-.07 2.35 0 3.456 0 .208.276.415.415.277.622-.346 1.382 0 1.382.691Z"
      fill="#fff"
    />
    <Path
      d="M71.066 4.735c-.208-.138-.277.276-.139.484.346.553.692 1.106 1.314 1.382.622.277 1.382.208 1.728-.345a5.335 5.335 0 0 0 2.35 1.52c.139 1.66.277 3.388-.276 4.909-.484 1.59-1.797 3.041-3.388 3.249.346.415.9.622 1.452.553a4.57 4.57 0 0 1 .139 3.18c1.244.069 2.557-.76 2.972-2.005-.83-.069-1.52-.83-1.59-1.659 1.175-1.037 2.074-2.489 2.42-4.079.691.277 1.59-.345 1.59-1.106 0-.76-.968-1.382-1.66-1.037.07-1.175.07-2.35.139-3.525 0-.346 0-.692-.139-1.037-.138-.277-.414-.484-.622-.622-.898-.623-1.866-1.107-2.972-1.176-1.106-.069-2.212.277-2.904 1.106l-.415.208Z"
      fill="#E1E1FF"
    />
    <Path
      d="M72.24 8.952v-.139c0-.069-.068-.138-.138-.207-.069-.07-.138-.07-.207 0-.07 0-.138.07-.207.138a1.001 1.001 0 0 0-.07.76c0 .07.07.139.139.208.069.07.138.07.207 0 .07 0 .138-.069.208-.138.069-.07.069-.138 0-.208V9.09s0-.07.069-.138l-.07.138.07-.138ZM75.835 8.744c-.069-.069-.138-.069-.207-.069-.069 0-.138 0-.207.07-.07.068-.07.138-.07.207v.484c0 .069.07.207.07.207.069.07.138.07.207.07.07 0 .207 0 .207-.07.07-.07.139-.138.07-.207v-.553c.069 0 0-.07-.07-.139ZM73.83 13.998c.554 0 .969-.207 1.383-.622.208-.207-.138-.553-.345-.346a1.525 1.525 0 0 1-1.037.415c-.415.07-.83 0-1.175-.276-.07-.07-.208 0-.277.069-.07.069 0 .207.07.276.414.415.898.553 1.382.484ZM73.416 12.616h.346c.138 0 .276 0 .345-.07.139-.069.208-.069.346-.138.069-.069.138-.138.069-.207-.07-.07-.138-.139-.207-.139-.139 0-.139 0-.277.07-.138 0-.207.069-.346.069h-.276c-.07 0-.138 0-.207.069l-.07.138.07.138c.069.07.138.07.207.07Z"
      fill="#372B7B"
    />
    <Path
      d="M85.79 43.793c-.968-5.323-1.797-10.577-2.35-15.969-.277-2.212-.415-4.839-1.59-6.844-.484-.76-1.175-1.382-2.005-1.866-.76-.415-1.867-1.037-2.765-1.037v-.346c0-.138-.207-.207-.346-.138-.415-.138-.76-.415-.83-.83-.069-.207-.069-.414-.069-.69 0-.07.07-.14.07-.208l1.244-1.452c.484-.622.899-1.244 1.037-2.005.968 0 1.866-.622 1.728-1.728-.069-.899-.968-1.383-1.728-1.175v-.346c.346-1.106.553-2.281.484-3.387.207-.277.276-.622.346-.968.069-.899-.415-1.728-.968-2.35A7.077 7.077 0 0 0 73.692.171c-1.52-.207-3.456.07-4.493 1.383-.622.76-.622 1.728-.138 2.488.069.07.069.139.138.208-.622.76-.691 1.728-.553 2.627.138.898.484 1.797.83 2.696-.76-.208-1.66.346-1.729 1.175-.138 1.037.83 1.728 1.798 1.66.207 1.174 1.106 2.211 1.935 3.11v.207c0 .07.07.208.07.277.069.207.069.415.138.622.069.346.069.691.069.968-.138.346-.484.691-.899.691-.138 0-.207.07-.207.208-2.212.898-4.286 1.935-5.254 4.286-1.037 2.42-1.106 5.046-1.175 7.604-.139 3.11-.346 6.29-.484 9.402-.07 1.659-.208 3.318-.139 4.908 0 .346-.069.691.208.898.207.139.484.277.76.346-.069.138-.207.346-.207.484-.07.277-.07.553-.07.76 0 .554.14 1.107.485 1.59.276.415.691.83 1.175 1.037.346.208 1.037.484 1.382.208.07-.07.139-.138.07-.208a4.8 4.8 0 0 0-.346-.898c-.07-.139-.207-.277-.276-.415l-.07-.07c.139-.068.277-.137.415-.276.277-.345.277-.76.207-1.175-.069-.207-.069-.415-.138-.622v-.346c0-.138.07-.207.07-.345 0-.07-.07-.07-.139-.07l-.069-.069c-.207-.069-.484-.069-.76-.069-.208 0-.346 0-.553-.069-.208-.069-.415-.069-.623-.138-.138-.07-.276-.07-.484-.138-.345 0-.483-.139-.345-.484-.138-.553 0-1.383 0-1.936 0-1.383.069-2.765.138-4.148.138-2.696.346-5.392.415-8.088.069-2.35.138-4.77.899-7.051.69-1.936 2.074-3.042 3.733-3.94.069 1.244.414 2.419.69 3.594.347 1.383.692 2.765 1.107 4.079.415 1.313.83 2.627 1.313 3.871.415 1.037.83 2.074 1.521 2.973-.069 3.249 0 6.429.07 9.678h-.485c-1.244 0-2.488-.138-3.802-.346-.276-.069-.691-.069-.968-.207-.414-.207-.414-.484-.483-.899-.07-.622 0-1.244 0-1.866 0-2.489 0-4.978.069-7.466 0-2.489.207-5.116-.138-7.605 0-.069-.139-.069-.139 0-.415 2.766-.207 5.738-.276 8.503-.208 2.904-.208 5.738-.208 8.642 0 .414.07.69.208.898-.553 4.563-.415 9.264-.484 13.826-.07 4.632-.139 9.264-.346 13.895 0 .139.07.208.207.277.139 0 .208.069.346.069-.138.484-.138 1.037-.138 1.52-.07.554-.07 1.107-.138 1.73-.07.552-.139 1.174-.139 1.796 0 .277-.069.553-.069.83 0-.07-.069-.138-.207-.138-.484.207-.899.484-1.037.968-.207.553-.138 1.175-.277 1.728a9.807 9.807 0 0 1-.967 2.489c-.415.69-.9 1.313-1.176 2.073-.207.623-.345 1.314.346 1.59.691.346 1.52.553 2.35.553.692 0 1.383-.207 2.005-.622.553-.415.899-.968 1.106-1.59.208-.484.415-.898.83-1.244.276-.277.484-.622.622-.968.346-.76.415-1.59.277-2.35v-.208c0-.345-.07-.622-.139-.968a.38.38 0 0 0-.345-.207c-.07 0-.07 0-.07.07.07-.346.07-.692.139-1.038.069-.622.207-1.313.276-1.935.208-1.245.346-2.489.415-3.664.277 0 .622-.07.899-.138h.069l.069-.07V71.238c.484-3.18.83-6.36 1.106-9.61.138-1.52.277-2.972.415-4.493.069-.83.207-1.659.276-2.42 0-.138 0-.276.07-.483v.276l.207 2.489c.138 1.52.207 3.042.207 4.563.139 3.18.346 6.36.83 9.54 0 0 0 .069.069.069 0 0 0 .069.07.069h.138c.345.069.69.138 1.036.138-.069 2.005.484 4.01.553 6.014 0 .277.484.277.415 0-.069-2.005-.484-4.01-.76-6.014.898.07 1.797 0 2.627-.207.138 2.074.207 4.216.138 6.29 0 .07 0 .07.07.139 0 .069-.001.069.068.069a1.333 1.333 0 0 0-.691-.208c-.277.07-.83.277-1.037.553-.07 0-.138 0-.138.07 0 .138-.07.276-.07.414l-.069-.069-.069-.069-.069-.069-.138-.138c0-.07-.07-.138-.07-.138 0-.07-.068-.139-.068-.208l-.07-.138-.138-.07h-.069l-.069.07V78.082c0 .138.07.276.138.484.07.138.138.276.277.345.069.07.138.138.207.138.07.07.207.139.277.07.069.207.138.414.207.553.277.553.484 1.106.76 1.659.208.415.484.898.968 1.037.277.069 1.106 0 1.037-.484 0-.07-.138-.138-.207-.138-.138 0-.277.138-.415.207-.138 0-.346 0-.484-.138-.346-.208-.484-.692-.691-1.037-.207-.415-.415-.899-.622-1.314-.138-.207-.208-.415-.277-.691-.069-.138-.138-.346-.138-.484-.07-.277.346-.415.553-.484.207-.07.415-.07.553 0 .207.07.276.277.346.415.069.276.207.484.276.76.208.484.346.968.622 1.452.139.207.208.484.346.691.07.139.138.277.207.346.07.138.139.207 0 .346-.138.069-.069.276.07.276.276.138.483-.276.414-.484 0-.207-.138-.345-.207-.484-.07-.138-.138-.345-.207-.484a19.916 19.916 0 0 1-.9-2.143c-.137-.276-.207-.622-.414-.83h.07c.276.07.345.416.483.623.07.276.208.553.346.899.276.622.622 1.244.968 1.866.345.553.76 1.106 1.175 1.59.276.346 1.313 1.244.484 1.59-.553.277-1.245.346-1.867.346-.553.069-1.175 0-1.728-.277-.553-.276-.83-.83-1.175-1.313a2.612 2.612 0 0 0-1.175-1.106c-.346-.208-.623-.346-.76-.76-.14-.346-.07-.761-.14-1.176v-1.106c0-.207.14-1.452.485-1.383.069 0 .207-.138.069-.207-1.175-.553-1.037 3.25-.968 3.802.07.346.207.692.484.899.276.276.691.346.968.553.553.484.83 1.244 1.382 1.728 1.106 1.106 2.766.83 4.148.553.346-.069.692-.138.899-.484.207-.276.207-.622.138-.898-.069-.346-.276-.553-.553-.83l-.83-1.037a13.859 13.859 0 0 1-1.52-2.558c-.277-.553-.415-1.728-1.176-1.797.139-2.074.139-4.148-.069-6.222.139-.069.277-.069.415-.069.138 0 .208-.138.208-.276-.208-4.632-.139-9.264 0-13.826.138-4.494.345-9.056-.139-13.55h.139c.069.622.069 1.314.138 1.936 0 .276.484.276.484 0h.276c0 .276 0 .622.138.898.07.208.139.415.277.553.138.208.276.346.484.484h.069v.484c0 .07.07.208.207.208.692 0 1.245-.692 1.176-1.383 0-.069-.139-.138-.208-.138-.069 0-.138.138-.138.207.07.415-.277.83-.622.899v-1.106c0-.346 0-.691-.07-1.037.277 0 .554-.07.761-.138l.83-.208c0 .76.069 1.452.069 2.212.069.692.069 1.314-.553 1.729-.484.345-1.037.484-1.59.622-.346.069-.553 0-.553-.346 0-.276 0-.553.069-.76 0-.139-.138-.208-.208-.07-.276.484-.483 1.245.07 1.521.345.208.76.07 1.106-.069a4 4 0 0 0 .968-.345c.69-.346 1.105-.899 1.105-1.66 0-.483-.069-.967-.069-1.451-.069-.484-.138-1.037-.138-1.521.277-.138.622-.277.899-.484.138 0 .207-.07.276-.207.277.138.208-.208-.069-.277Zm-19.633 2.074c.208 0 .346.07.484.07v.621c.07.346.138.692.07 1.037-.07.208-.208.415-.415.415-.07 0-.139 0-.208-.069-.069-.138-.069-.346-.069-.484v-1.383c.07-.069.138-.138.138-.207Zm-1.52.07c.414.068.829.137 1.106.207-.07.414-.07.898-.139 1.313 0 .207-.069.484.07.622.069.139.207.277.414.277h.139c.069.069.069.138.138.207.069.138.138.277.207.346.07.207.138.415.207.622-.069 0-.138-.07-.207-.07a4.757 4.757 0 0 1-.553-.207c-.415-.207-.691-.553-.968-.898-.553-.692-.622-1.59-.415-2.42ZM77.08 18.283c.276.208.622.346.968.484-.346 2.558-.623 5.116-1.245 7.674-.553 2.35-1.382 4.562-2.35 6.774 0-.968-.07-1.935-.138-2.903.069-.07.138-.07.138-.208.622-1.935 1.037-3.87 1.452-5.806.345-1.729.622-3.526.83-5.254.068-.07.138-.208.207-.277.069-.207.138-.346.138-.484Zm-2.834 1.936c.76 0 1.52-.207 2.073-.691-.345 1.59-.69 3.18-1.037 4.7-.414 1.66-.898 3.319-1.313 5.047-.83-3.318-2.074-6.498-2.627-9.886.83.553 1.867.899 2.904.83Zm-2.42-2.212c.138 0 .207-.07.277-.208.069-.415 0-.898-.139-1.313-.069-.138-.069-.346-.138-.484l.207.207c.208.208.484-.069.346-.276-.691-1.314-2.42-2.281-2.489-3.871 0-.208-.207-.277-.345-.277-.623.138-1.383-.207-1.383-.968 0-.691.76-1.037 1.314-.622.207.138.414-.07.414-.276V9.78c.139-.069.208-.138.208-.276-.208-1.452-.208-2.973-.07-4.425.277.208.554.346.9.484.138.07.207.139.345.208.207.138.415.207.691.345.484.208 1.106.208 1.383-.276.138-.208.207-.415.207-.622 1.175.83 2.696 1.659 4.01 1.244 0 1.175-.07 2.35 0 3.457 0 .207.276.414.415.276.553-.415 1.313-.07 1.313.622 0 .76-.76 1.106-1.383.968-.207-.07-.345.07-.345.277 0 .898-.691 1.659-1.245 2.35-.553.622-1.106 1.244-1.52 1.936-.139.207.207.483.345.276l.138-.138c0 .138 0 .276.07.415.069.276.207.553.414.76.208.207.415.277.692.415-.139.415-.415.83-.83 1.037-.415.276-.968.415-1.452.415H73.9c-.968 0-2.005-.346-2.765-.968.345-.07.553-.277.691-.553ZM73.9 33.216c-1.175-1.935-1.936-4.355-2.627-6.498a36.376 36.376 0 0 1-1.037-3.664c-.276-1.244-.484-2.488-.899-3.664.415-.207.899-.415 1.314-.622.138.07.207.207.345.277.208 3.94 1.936 7.673 2.766 11.475 0 .139.138.208.207.208 0 .898 0 1.728-.07 2.488Zm-6.706 45.419h.277c.207 0 .415.069.622.069.346.138.691.276.968.622 0 0 .069 0 .138.069-.07.07-.138.138-.138.277-.07.138-.208.276-.277.484-.207.276-.345.622-.553.898-.207.277-.345.553-.553.899-.207.276-.346.622-.484.898a2.074 2.074 0 0 0-.553-.276c-.138-.07-.345-.07-.484-.07h-.069c.277-.552.484-1.105.692-1.59.138-.829.345-1.52.414-2.28Zm3.18.83v.621c0 .07.07.139.07.208 0 .484-.07.968-.277 1.382-.277.623-.76 1.037-1.106 1.59-.346.484-.415 1.106-.76 1.66-.346.552-.969.829-1.522.967-.69.138-1.382.07-2.073-.138-.208-.07-.346-.138-.553-.207-.277-.139-.346-.346-.277-.623.07-.345.207-.69.415-.967.691-1.106 1.313-2.212 1.728-3.526a6.967 6.967 0 0 0 .207-1.728c.07-.691.208-1.106.9-1.383 0 0 0-.069.068-.069v.07c0 .276-.069.621-.069.967h-.069c-.138-.07-.346.07-.346.207-.138.76-.276 1.452-.414 2.213-.139.622-.346 1.244-.553 1.866h-.07c-.069.07-.138.07-.138.207 0 .07.07.139.138.139h.623c.069 0 .138 0 .207.069.276.069.484.207.691.415.07.069.277.069.346 0 .07-.07.138-.277 0-.346-.07-.07-.138-.07-.138-.138.207-.277.484-.484.691-.76.207-.277.415-.554.622-.9.207-.276.415-.552.553-.898.138-.138.208-.277.277-.484v-.07c.276 0 .484-.276.622-.483.069-.138.138-.207.207-.346v.484Zm-.069-4.08c-.069.623-.138 1.176-.207 1.798-.07.345-.07.691-.138 1.037 0 .138-.07.346-.07.484-.069.138-.138.207-.207.345l-.07.139v.138l-.068-.07c0-.068 0-.207-.07-.276-.345-.345-.76-.622-1.244-.691-.207-.07-.415-.07-.691-.07.07-.207.07-.483.07-.69 0-.346.068-.692.068-.968.07-.553.139-1.176.139-1.798.069-.553.069-1.106.069-1.728v-1.589c.967.207 1.935.276 2.903.207-.138 1.244-.346 2.488-.484 3.732Zm9.678-18.319c-.138 4.563-.207 9.056 0 13.619-1.313.345-2.696.415-4.01.138-.414-3.18-.621-6.29-.76-9.47-.069-1.453-.138-2.973-.207-4.425-.07-1.452-.138-3.111-.484-4.563.07-.207.07-.415.07-.622 0-.346.068-.691.068-1.037 0-.622.07-1.313.07-1.936v-1.935c0-.622 0-1.383-.208-1.936h-.138c-.208.622-.138 1.314-.138 1.936 0 .622-.07 1.313-.07 1.935 0 .623-.069 1.314-.069 1.936 0 .346-.069.691-.069 1.037v.484c-.415 1.452-.484 3.11-.622 4.493-.138 1.521-.276 3.111-.484 4.632-.276 3.18-.622 6.36-1.106 9.54-1.383.208-2.696.208-4.01-.207.208-4.563.277-9.126.277-13.688 0-4.563.207-9.056.207-13.619.208.139.415.208.692.208 1.313.276 2.627.415 3.94.484 2.489.138 4.908-.139 7.328-.692-.208 4.701-.07 9.195-.277 13.688Zm2.42-10.508v.277c-.346-.415-.553-.83-.553-1.383h.553v1.106Zm-.553-1.52c0-.07-.07-.07-.138-.139-.07 0-.208 0-.208.139h-.346c-.069-.553-.138-1.176-.207-1.729.138-.138.07-.345-.069-.484v-.207c-.138-2.973-.346-5.876-.484-8.849-.069-1.52-.207-3.11-.276-4.631-.07-1.521-.07-3.042-.415-4.494 0-.069-.138-.069-.138 0-.208 1.59 0 3.25.069 4.84.069 1.451.138 2.972.207 4.493l.415 8.918a28.65 28.65 0 0 1-5.945.829c0-3.18.069-6.36.069-9.47a47.227 47.227 0 0 0 2.696-7.605c.622-2.489 1.106-5.116 1.106-7.674.553.208 1.037.415 1.52.692 1.107.691 1.798 1.728 2.213 2.972.76 2.35.968 4.77 1.175 7.26.484 4.769 1.314 9.539 2.212 14.309-1.037.415-2.212.76-3.456.83Z"
      fill="#372B7B"
    />
    <Path
      d="M71.342 19.39c.346 2.074.899 4.01 1.52 6.015.485-1.729 1.038-3.388 1.176-5.185a4.932 4.932 0 0 1-2.696-.83Z"
      fill="#E1E1FF"
    />
    <Path
      d="M76.32 19.529c-.554.483-1.383.69-2.074.69h-.139c-.207 1.798-.691 3.457-1.175 5.186.415 1.244.76 2.557 1.106 3.802.415-1.66.899-3.319 1.314-5.047.345-1.451.69-3.041.967-4.631.07 0 .07 0 0 0Z"
      fill="#B7B7FF"
    />
    <Path
      d="M72.517 7.43c0-.137-.138-.276-.207-.207-.346 0-.622.139-.968.277-.07.07-.138.138-.07.277.07.069.14.138.208.138.138-.07.277-.07.415-.138h.346c.138-.139.276-.208.276-.346ZM75.49 7.846h.553c.069 0 .138 0 .207-.07.07-.069.07-.138.07-.207a.297.297 0 0 0-.277-.276h-.553l-.138.069-.07.138.07.138c0 .139.069.208.138.208ZM74.176 16.349h-.553c-.207 0-.345 0-.553-.07-.069 0-.138 0-.207.07 0 .069 0 .207.069.207.207.07.415.138.691.207h.346c.138 0 .277-.069.346-.069.138-.069.207-.138.207-.276-.07 0-.207-.07-.346-.07ZM71.135 38.47h1.382c.07 0 .208-.069.208-.207v-.139c0-.069-.139-.207-.208-.207H69.752c-.276 0-.276.346 0 .415.484.069.899.069 1.383.138ZM78.67 37.572c-.138 0-.277.069-.415.138-.276.069-.484.138-.76.207-.277.07-.484.07-.76.138-.14 0-.277 0-.416.07-.138 0-.276.069-.414.069-.139 0-.208.207-.07.276.277.07.484.138.83.138h.76c.277 0 .553-.069.83-.138.138-.069.277-.138.415-.138.138-.07.276-.138.276-.346.07-.276-.069-.414-.276-.414Z"
      fill="#372B7B"
    />
    <Path
      d="M71.342 1.831c.622-.138 1.244-.138 1.867-.069.276.07.622.138.898.208.277.069.553.207.899.345.346.138.553-.415.207-.553-.553-.345-1.313-.415-1.935-.484-.692-.069-1.383.07-2.005.208-.207.069-.138.414.07.345ZM76.942 3.007l.069-.07.138-.138.07-.138-.07-.138-.138-.139-.07-.069c-.069 0-.138-.069-.207-.069-.069 0-.138 0-.207.07a.38.38 0 0 0-.207.345c0 .138.069.276.207.346.069 0 .138.069.207.069.07 0 .139 0 .208-.07Z"
      fill="#fff"
    />
    <Path d="M39.75 78.15h-9.817v.692h9.817v-.691Z" fill="#372B7B" />
    <Path
      d="M30.832 80.225v-3.111l-3.664 1.59 3.664 1.52ZM60.973 78.15h-9.126v.692h9.126v-.691Z"
      fill="#372B7B"
    />
    <Path
      d="M60.143 80.225v-3.111l3.595 1.59-3.595 1.52ZM44.589 75.662c-.138 0-.415 0-.622.07-1.314.207-2.005 1.174-2.143 2.211.276-.414.83-.69 1.52-.69 1.107 0 1.867.76 1.867 2.004 0 1.106-.76 2.212-2.074 2.212-1.313 0-2.212-1.037-2.212-2.627 0-1.244.415-2.212 1.037-2.765.484-.484 1.175-.83 2.005-.899.276-.069.484-.069.622-.069v.553Zm-.208 3.595c0-.899-.483-1.452-1.313-1.452-.484 0-.968.346-1.175.76-.07.07-.07.208-.07.346 0 1.037.484 1.798 1.383 1.798.691 0 1.175-.553 1.175-1.452ZM46.317 81.262v-4.01h-.691v-.622h.691v-.207c0-.623.138-1.245.553-1.59.346-.277.76-.415 1.106-.415.277 0 .553.069.691.138l-.138.622c-.138-.069-.276-.138-.553-.138-.691 0-.898.622-.898 1.313v.277h1.105v.622h-1.105v4.01h-.761ZM50.12 75.317v1.313h1.174v.622H50.12v2.489c0 .553.139.898.622.898.208 0 .415 0 .484-.069l.07.623c-.139.069-.415.138-.761.138-.415 0-.691-.139-.899-.346-.207-.276-.345-.691-.345-1.175V77.32h-.692V76.7h.692v-1.106l.83-.276Z"
      fill="#372B7B"
    />
  </Svg>
)

export default SvgComponent
