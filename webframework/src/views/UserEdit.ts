import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: "#user-show",
      userForm: "#user-form",
    };
  }

  template(): string {
    return `
      <div>
        <div id="user-show"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}
