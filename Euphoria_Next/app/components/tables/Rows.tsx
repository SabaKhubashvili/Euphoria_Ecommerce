import { Dropdown_Down } from "@/public/Svg/Icons";
import classNames from "classnames";

const getCellClasses = (text:string, type:string) => {
    return classNames({
        'bg-[#ffc60029] text-[#FFC600]': type === 'primary' && text === 'Pending',
        'text-yellow-500': text === 'Pending' && type !== 'primary',
        'text-[#28C76F] bg-[#28c76f29]': text === 'Confirmed' && type === 'primary',
        'text-green': text === 'Confirmed' && type !== 'primary',
        'text-[#33189D] bg-[#33189d29]': type === 'primary' && text !== 'Pending',
        'text-[#33189D]': type !== 'primary' && text !== 'Pending',
    });
};



const Dropdown = ({ type }:{type:string}) => (
    type === 'primary' && <Dropdown_Down />
);

class MainTableRows {
    static HeaderCell = ({ text, tableData }: { text: string; tableData: any[] }) => (
        <h1 className={`text-secondaryGray uppercase font-medium md:text-[16px] text-[13px]`} style={{ flexBasis: 100 / Object.keys(tableData[0]).length + '%' }}>
            {text}
        </h1>
    );

    static StatusRowCell = ({
        text,
        type,
        tableData,
    }: {
        text: "Pending" | "Delivered" | "Confirmed";
        type: string;
        tableData: any[];
    }) => (
        <h1
            className={`font-medium xl:text-[16px] text-[13px] cursor-pointer flex items-center justify-between  !py-[5px] !px-[10px] ${getCellClasses(
                text,
                type
            )}`}
            style={{ flexBasis: 100 / Object.keys(tableData[0]).length + '%' }}
        >
            {text}
            {type === "primary" && <Dropdown type={type} />}
        </h1>
    );

    static RowCell = ({ text, tableData }: { text: string; tableData: any }) => (
        <h1
            className={`text-black font-medium xl:text-[16px] text-[13px] py-[18px]`}
            style={{ flexBasis: 100 / Object.keys(tableData[0]).length + '%' }}
        >
            {text}
        </h1>
    );
}

export default MainTableRows;
