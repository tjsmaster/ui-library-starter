import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
    component: ProgressBar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
    args: {
        percentage: 65,
    },
    argTypes: {},
    render: props => <ProgressBar {...props} />,
};