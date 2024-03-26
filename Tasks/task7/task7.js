//todo: Из предыдущего задания (task6) сгенерируйте динамически шахматное поле из массива в HTML 
// и раставьте шахматы в соответсвующем порядке.


const mapChessUnits = {
	"queen_w": '<i class="fa-regular fa-chess-queen"></i>',
	"queen_b": '<i class="fa-solid fa-chess-queen"></i>',
	"king_w": '<i class="fa-regular fa-chess-king"></i>',
	"king_b": '<i class="fa-solid fa-chess-king"></i>',
	"rook_w": '<i class="fa-regular fa-chess-rook"></i>',
	"rook_b": '<i class="fa-solid fa-chess-rook"></i>',
	"bishop_w": '<i class="fa-regular fa-chess-bishop"></i>',
	"bishop_b": '<i class="fa-solid fa-chess-bishop"></i>',
	"knight_w": '<i class="fa-regular fa-chess-knight"></i>',
	"knight_b": '<i class="fa-solid fa-chess-knight"></i>',
	"pawn_w": '<i class="fa-regular fa-chess-pawn"></i>',
	"pawn_b": '<i class="fa-solid fa-chess-pawn"></i>'
}


const chessBoard = [[[], [], [], [], [], ["rook_b"], [], ["queen_b"]],
						[[], ["pawn_b"], ["knight_w"], [], ["rook_w"], [], ["pawn_b"], ["pawn_b"]],
						[[], ["pawn_w"], ["bishop_b"], [], [], [], [], []],
						[["knight_b"], [], ["rook_b"], [], ["pawn_w"], [], ["knight_b"], []],
						[[], [], [], [], [], [], [], []],
						[["bishop_b"], [], [], ["pawn_b"], [], [], [], []],
						[[], [], [], [], [], [], [], ["pawn_w"]],
						[[], ["rook_w"], [], ["knight_w"], [], [], ["queen_w"], []]]

result = ''
node = document.getElementById('chess-board')

chessBoard.forEach((row) => {
	row.forEach((item) => {
		if (item.length == 0) {
			result += '<i style="backgroung-color: black;"></i>'
		} else {
			result += mapChessUnits[item[0]]
		}
	})
})

node.innerHTML = result