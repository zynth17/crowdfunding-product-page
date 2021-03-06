import React from "react";
import style from "@/components/campaign/CampaignReward.module.scss";
import Button from "@/components/Button";
const CampaignReward = props => {
    return (
        <div
            className={`${style.campaign__reward} ${
                props.reward.left <= 0 ? style.disabled : ""
            }`}
        >
            <div className={style["campaign__reward-wrapper"]}>
                <h4 className={style["campaign__reward--name"]}>
                    {props.reward.name}
                </h4>
                <span className={style["campaign__reward--pledge"]}>
                    Pledge ${props.reward.pledge} or more
                </span>
            </div>
            <p className={style["campaign__reward--detail"]}>
                {props.reward.description}
            </p>
            <div className={style["campaign__reward--cta"]}>
                {props.reward.left && (
                    <h2>
                        <span className={style["campaign__reward--left"]}>
                            {props.reward.left}
                        </span>
                        <span className="ml-2 text-gray-dark">left</span>
                    </h2>
                )}
                <Button
                    onClick={() => {
                        props.openModal(props.reward.id);
                    }}
                    className={`mt-5 lg:max-w-[200px] md:max-w-[40%] max-w-[80%] md:ml-auto`}
                    type="button"
                    disabled={props.reward.left <= 0}
                >
                    {props.reward.left > 0 || props.reward.left === undefined
                        ? "Select Reward"
                        : "Out of Stock"}
                </Button>
            </div>
        </div>
    );
};

export default CampaignReward;
