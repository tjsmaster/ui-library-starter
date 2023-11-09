import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popovers";

const meta: Meta<typeof Popover> = {
    title: "Components/Popover",
    component: Popover,
    tags: ["autodocs"],
    parameters: {
        docs: {
            story: {
                height: "250px",
            },
        },
        backgrounds: {
            default: "grey",
            values: [
                {
                    name: "white",
                    value: "#FFFFFF",
                },
                {
                    name: "grey",
                    value: "#E5E5E5",
                },
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    args: {
        title: "Popover Title",
        description:
            "Lorem ipsum dolor sit amet, consect adipiscing elit. Mauris facilisis congue exclamate justo nec facilisis.",
    },
    argTypes: {
        title: {
            defaultValue: { summary: '"undefined"' },
        },
        description: {
            defaultValue: { summary: '"undefined"' },
        },
    },
    render: props => (
        <Popover {...props}>
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
                />
            </svg>
        </Popover>
    ),
};
