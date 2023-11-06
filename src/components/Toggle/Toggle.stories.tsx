import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
    component: Toggle,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Warning: Story = {
    args: {
        defaultState: false,
        state: false,
    },
    argTypes: {},
    render: props => {
        const [checked, setChecked] = React.useState(props.state!);

        return (
            <div>
                <Toggle state={checked} setToggle={setChecked} {...props} />
                <p>Checked: {JSON.stringify(checked)}</p>
            </div>
        );
    },
};
