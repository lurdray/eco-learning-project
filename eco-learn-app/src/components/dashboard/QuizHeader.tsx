export default function QuizHeader({ title }: { title: String }) {
  return (
    <div className="w-[100%] text-center space-y-4">
      <h1 className="capitalize font-semibold text-2xl">{title}</h1>
      <div className="flex m-auto max-w-fit space-x-1">
        <h1 className="font-semibold text-base">Instructions:</h1>
        <div className="text-left text-gray-600">
          <p>
            Complete the following quiz to test your understanding of the
            concepts covered in this lesson.
          </p>
          <p>Earn tokens for correct answers and track your progress.</p>
        </div>
      </div>
    </div>
  );
}
