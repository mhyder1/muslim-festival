import dayjs from "dayjs";

export const useDeadline = () => {
    const deadline = dayjs("11/4/2024");
    const date = dayjs().isBefore(deadline)
        ? deadline.format("MMMM DD, YYYY")
        : "December 31, 2024";

    return { date }
}