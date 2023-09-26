import { FC } from "react";
import {
    Breadcrumb,
    Radio,
    Button,
    Input,
    Pagination,
} from "@arco-design/web-react";
import { IconFilter, IconPlus, IconSearch } from "@arco-design/web-react/icon";
import styles from "./App.module.css";
import { CardItem } from "./CardItem";

export const App: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Breadcrumb>
                    <Breadcrumb.Item>Codebase</Breadcrumb.Item>
                    <Breadcrumb.Item>List of Repos</Breadcrumb.Item>
                </Breadcrumb>
                <Radio.Group type="button" defaultValue="Card">
                    <Radio value="Card">Card</Radio>
                    <Radio value="List">List</Radio>
                </Radio.Group>
            </div>
            <div className={styles["main-container"]}>
                <div className={styles["main-container-header"]}>
                    <div
                        className={
                            styles["main-container-header-button-wrapper"]
                        }
                    >
                        <Button type="primary" icon={<IconPlus />}>
                            Add Repo
                        </Button>
                        <Button type="outline" icon={<IconFilter />}>
                            Filter
                        </Button>
                    </div>
                    <Input
                        style={{ width: 250 }}
                        prefix={<IconSearch />}
                        allowClear
                        placeholder="Enter keyword to Search"
                    />
                </div>
                <div className={styles.content}>
                    <CardItem chosen />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
                <Pagination
                    style={{ marginTop: "40px", marginBottom: "100px" }}
                    simple
                    total={50}
                    size="small"
                />
            </div>
        </div>
    );
};
