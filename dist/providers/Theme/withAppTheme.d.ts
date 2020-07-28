import { ComponentType } from "react";
declare function withAppTheme<P extends {}>(Component: ComponentType<P>): (props: P) => JSX.Element;
export default withAppTheme;
