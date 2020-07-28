import { ComponentType } from "react";
declare function withAppConfigs<P extends {}>(Component: ComponentType<P>): (props: P) => JSX.Element;
export default withAppConfigs;
