import dayjs from "dayjs";

export const useDeadline = () => {
    const deadline = dayjs("11/4/2024");
    const date = dayjs().isAfter('11/5/2024')
        ? "November 15, 2024"
        : deadline.format("MMMM DD, YYYY")

    return { date }
}