import { subDays } from "date-fns";

type Reflection = {
  id: number;
  reflection: string;
  createdAt: Date;
  updatedAt: Date;
};

export const fakeReflectionDatabase: Reflection[] = [
  {
    id: 1,
    reflection:
      "Today was productive; completed most of my tasks but felt a bit tired towards the end.",
    createdAt: subDays(new Date(), 5),
    updatedAt: subDays(new Date(), 5),
  },
  {
    id: 2,
    reflection:
      "Spent quality time outdoors and it helped clear my mind. Need to do this more often.",
    createdAt: subDays(new Date(), 4),
    updatedAt: subDays(new Date(), 4),
  },
  {
    id: 3,
    reflection:
      "Faced some challenges today, but learned a lot from the experience. Progress is being made.",
    createdAt: subDays(new Date(), 3),
    updatedAt: subDays(new Date(), 3),
  },
  {
    id: 4,
    reflection:
      "Had an insightful conversation with a friend. It really motivated me to think differently. dawd awjd ajkwd jakwdj akwdj kawdj kawdj kawdj kawdj kaw djakwd jakwd jakw djk",
    createdAt: subDays(new Date(), 2),
    updatedAt: subDays(new Date(), 2),
  },
  {
    id: 5,
    reflection:
      "Took some time to relax today and recharge. Felt refreshed and ready for what's next.",
    createdAt: subDays(new Date(), 1),
    updatedAt: subDays(new Date(), 1),
  },
  {
    id: 5,
    reflection: "This is a reflection from today",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const getReflections = async () => {
  return fakeReflectionDatabase;
};

export const addReflection = async (reflection: Reflection) => {
  return fakeReflectionDatabase.push(reflection);
};
