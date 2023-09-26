import { Breadcrumb, Button, Link } from "@arco-design/web-react";
import { IconFolder, IconCheck } from "@arco-design/web-react/icon";
import styles from "./CardItem.module.css";
import { FC } from "react";
interface Props {
    chosen?: boolean;
}

export const CardItem: FC<Props> = ({ chosen }) => {
    return (
        <div
            className={[
                styles["card-item"],
                chosen && styles["card-item-chosen"],
            ].join(" ")}
        >
            <div className={styles["card-item-header"]}>
                <Button
                    shape="circle"
                    type="primary"
                    style={{
                        backgroundColor: "#000000",
                    }}
                    icon={<IconFolder />}
                />
                <Breadcrumb>
                    <Breadcrumb.Item>YORG</Breadcrumb.Item>
                    <Breadcrumb.Item>new-backend</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia culpa fugiat facere non sint sed natus veniam nulla
                ratione animi.
            </div>
            <div className={styles["card-item-footer"]}>
                <div className={styles["card-item-footer-left"]}>
                    <Button
                        style={{ fontWeight: "bold" }}
                        icon={<IconCheck />}
                        status="success"
                    >
                        Ready
                    </Button>
                    <Link style={{ color: "#333333" }}>24 min ago</Link>
                </div>
            </div>
        </div>
    );
};
