import * as React from "react";

import cx from "classnames";

import { colors } from "../../utils/colors";

import { WarningIcon } from "../icons/WarningRedIcon";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";

export function ConfirmationModal({
    variant = "default",
    title,
    desc,
    position = "top-center",
}: ConfirmationModalProps) {
    return (
        <div
            className={cx(
                "absolute translate-x-[-50%] translate-y-[-50%]",
                "w-[530px] rounded-[20px] p-[50px] shadow-2 bg-white z-50",
                "flex flex-col justify-center items-center",
                {
                    ["left-1/2 top-[22vh]"]: position === "top-center",
                    ["left-1/2 top-1/2"]: position === "center",
                },
            )}
        >
            {variant === "danger" && (
                <div className={cx("p-[18px] bg-red-light-5 rounded-full mb-[22px]")}>
                    <WarningIcon />
                </div>
            )}
            <Typography variant="h3">{title}</Typography>
            {variant === "default" && (
                <span className={cx("inline-block w-[90px] h-[3px] bg-primary rounded-xl mt-[18px]")} />
            )}
            <div className="mt-6 text-center text-primary-text">
                <Typography variant="body2-regular">{desc}</Typography>
            </div>
            <div className={cx("w-full flex items-center justify-between mt-[35px]")}>
                <Button
                    className="mr-[9px]"
                    fullWidth
                    variant="outlined"
                    color="tertiary"
                    style={{ borderColor: colors.stroke }}
                >
                    Cancel
                </Button>
                <Button
                    className="ml-[9px]"
                    fullWidth
                    style={{
                        borderColor: colors.stroke,
                        ...(variant === "danger" ? { background: colors.redDark } : {}),
                    }}
                >
                    View Details
                </Button>
            </div>
        </div>
    );
}

interface ConfirmationModalProps {
    title: string;
    desc?: string;
    variant?: "default" | "danger";
    position?: "top-center" | "center";
}