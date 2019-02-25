import { GuideAssignmentButton } from './party-assignment-button';

export class ButtonFactory {
    public static createGideAssignmentButton(): GuideAssignmentButton {
        return new GuideAssignmentButton();
    }
}
