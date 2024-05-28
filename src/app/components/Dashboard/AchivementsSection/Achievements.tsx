export default function Achievements() {
    const achievements = [
        'advance-1.jpg', 'beg-women-1-.jpg', 'med-male-3.jpg', 'med-women-3.jpg',
        'advance-2.jpg', 'beg-women-2-.jpg', 'med-male-4.jpg', 'med-women-4.jpg',
        'beg-men-1.jpg', 'beg-women-3-.jpg', 'med-male-5.jpg', 'med-women-5.jpg',
        'beg-men-2.jpg', 'beg-women-5-.jpg', 'med-male-6.jpg',
        'beg-men-3.jpg', 'med-male-1.jpg', 'med-women-1.jpg',
        'beg-men-4.jpg', 'med-male-2.jpg', 'med-women-2.jpg',
    ]
    return (
        <>
            <div className="flex w-11/12 m-10 flex-wrap gap-5 justify-center">

                {achievements.map((item, key) => (
                    <div key={key} className="w-48 overflow-hidden m-2 p-5 rounded-full cursor-pointer">
                        <img
                            src={`/achievements/${item}`}
                            alt={item}
                            className="rounded-full object-cover shadow-lg hover:scale-105 hover:brightness-105 hover:shadow-2xl duration-500 brightness-50" />
                    </div>
                ))}
            </div>
        </>
    )
}