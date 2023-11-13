const currencyData = [
	{
		text: "EUR",
		value: 1,
		rate: 1,
		selected: true,
		imageSrc: "assets/images/eu-icon.svg",
	},
	{
		text: "USD",
		value: 2,
		rate: 0.8,
		selected: false,
		imageSrc: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAsVBMVEX///+zGUIKMWGwADbYn6m0IUazFUCxADjRjJm8RV+xBTrKd4fDYHQAKl1ca4cALl8AHlcAM2MAI1m7Fz8ABU8AIlkAJ1sAGVUAHVcAEVLu8PMAFFMAAEkAF1QAK10AEFK0vMjX2+IAClBBV3vl6O10gprKz9gmQ22YorO+xM+Gkqeiq7tNYYFmdpEaO2hXaYg3T3WBjqMrR3Bvfpg9U3jQ1d0eQG2rs8KPmqy4ADMAAFEuOqcHAAAJ8UlEQVR4nO1df5OiOha9y3tv33u7G4OMBEVBUETwB4jdNk5//w+2RIKdYNdWz53assLk/GGPtzlTdU+FcHJzQ4P1PIy//UNXgJENAyMbCpJs5JPMKP0k+NmFGPYgZHP37mOKx+OjHJ9diGIPQTZSwvwhRzuK7IfgHMoHNVBs7WWj0/mihvVq7shSBPOF7y/mgSySM1+toV7Mp9L9h2XrLhst0iQG8BM/Y9IASpIEoPmQBhfL/NgHiJO0uOuGZusum0WdHDgqTx4arz6P+a/yIPKq24W5I482JFt72SxrEjXplHLezYiZ8Bwn6kTmjZpYNFFiSPYAZFv54MNencHJmie+DpWgvW8u9FeqbDi2/rKFBzhOaj9ov4kb0K6TokhqWwl6fr049tRAssfff9MVQjay2TrWfHO+ZUff2iTZzqOht2vneRGkp83ccrab9t4bj3+G7f6uLbqblPC0WJvwNBdjg90/mozzafuTdB/NrzYbhmdbt8lPU1gPoDYcWT/IjmA/LJW8NPX6sa+zByXb2A2OkL+7dCzFqPuewzFwpZhVMPcd4N1lBYY9MNnYVcRTKckiFcHrxzgKD34b8w/hj7OHJptlr29y7Gayn53teMxfyxaDuDeTm9sEwx6abJZbwqOffY+aYKkWOeiC8xfqnPVl9tBkm0bQDKNpL9gMK4jUICmb1SWM1GXAl9mDka2zqfDyvvVFpUwUGsnR376/+Kp1tfNouYxyG8ceimzhWjjSk2OFTnmb5+m5tbBh6YaWczq1VwiTH5bNsiAoQxx7ILLRIg6kIdLm5lyvbQEjlAZPEIui0S1IsOwhyEbItALGiDxRUUJWcbwiRJ70CWEEqqlyIZatvWxvx3J9gexQjj6SpOtR2TwWy3K0loKj8pDBZV0e3z7EwLK1l43sxTfpuUi3cRuLtx+Jk5G4cC+NLCybfvtDV4ib1LvZ1NSRfTxd3mzqbinfZszhnt9fK2tRJHv87Z+64l6m5Jb/KBew+dYKT3yq+lnn2MTypRJDsvUvUzZ+K9lBr57BNhBFsFFXkkEKuwR66yQcW3/ZWJV73jkRyYkpyk43s1mV2krQSs6el1ei+kh/hq2/bPTULH1IuG1T7Ez+ubnt3DNVgtuw+TntrGtncjHsAchmyVPQMhHJ0o/f0FMiz2dt0NnvHTx7CLLdwRz7Da5LR90IdZZXeLOVR2XoOIskWThOiGEPTDayy645JNds/+G36HafXRPIr9nuw5iFZRMEaC4swx9nD022u00dSWODjR6tq8WEyd0zDHtgsll0lfEUmXJHMcblyFZK3l67f+zh2AOTzXJ4n8al52eXlyZY9fws4bKFPT/7VTaX7fufuuJRtnnir3MoFDVoAfnaj9UWNucKmw1cHRyb/wd/aYuHJlR6zl223O1UP7vbLZmbdyasvd7NX237NXdxbGsAFZCbCmI/rnDpfTOdlF13WhOgbrsjyq6dUiGvoGHZw5CNHD5rI63rz9pID49NqBi29rJR25vs4TTz5Ccg8TzeRup5skjMm51gP/Hk3gQsW3fZaJFfUh+S9CK3kY4uaQqQphep+siyS5qAn15yuQkVydZdNissWpuqdPbdamPQq6PZrcmNC2lJhWVrL5tFJ7zQ+KLOT4zxC1Tras1fmlg+UR0Gjq2/bNYqaf6dqf0G4YlfcFLbSF2+DEhWSgzJ1l82eoJdkHZtpF2Oe3+99nvHWwI/ne/gpI42HFt/2Vh1sOnq2tUPhU3NSAMxz4uONXq6Lun0UCkWBMnWX7abdbVElcyuuzbS5ift2kiFB6N8ig/bvMnLC8GzhyCbDK/fRmTdtjgf+k2taZ4/tBF9nT0o2eh0WUI08ZQVuuNNIiiX6u6d7S0AFp6NY/OL/9YWD02oGfCtYh/UQ1UiqByq4kc4+OEMqbr7ZfYNA9hevsNrbeo+kFdPQWtTj/KdxlqTGxcMw25le3a1EY3Huc3+rI20PVSlLsw/bUL9MntwstUQg98bGZ7fBHv1jPAAvt+vhnyZPRjZumNRcF0cQExYIhaWcFhcu6dh128aXWznEtk49lBko+LI1OlgW8xqd9HpW9vGRo4WsaYHsRfflWk3M0pnG4JjD0Q2SkXrC+UjpTtUVVXSoSrRGOmlXSvz/QPDHoJslDobcEPlDRSU0vklndNeMHRh46ivqkCytZetOG3HKVTF9iSleD5v3wDetuezlPlpW1SQjrcn6aQVlq29bDQXa4bqw4TRdXeoSuq+ZZW4MJeNGZKtvWzW7NhaV7nME85uNnU/k0tmbmtyjzMphmWPv/9LVyhNqKPetvuS59jrQXBuLwlYKTEkm/1bW3SyBeDvIe+1kR4hTfuHar0c9j6oFUkkW/8KCNvEZHbwheO/t5Fmq1XWayMl/mFG4s6t0Z9h6y8bXXu0WZy3Tz0iNtMpPwFqiyldBOm5WbpT737CiuLZA5BNdIy26cyT7WMb6TaZSwNMNKFmmYNnD0G2OwhzCtgFjMkOg7FgB2OHycv2kLH3OH5nLMSwByYb2VSbGuKXzU5uI91tXmKom1/JTajV5gXgZVPJTahfZQ9NNvoqbGolt5EKm+q/SoMoFCY3DzHsgcnW2NS6iSaKdW1sKt8/rpfKXvHyZnJV4/t19sBks5pVOUDabyPlR8x6B4Gox/n9Q1VfZQ9NtnkMxxiUExrNF4iPcFFNbnPzZZlyO/4IezCydS9xiqmz2vfbSPcrh3bHtYVQdloGQdn52R9lD0U2R4ybgvfs2W1dKDyIV8rwyYqKILv3fJOPTlwEexCyhWv/sY3UrevH98LO/df+5I5jk/9oi64J1Z5kcA5spY3UtvmhKlt5Gw+zgzNkE1ttQsWxx9+eXf9Bo21CfYui2odLHSltpHkUAURRrrSRRvUF/DqK3j78LJatfZkyFDY1VzpGhU2t5A1O1ppcX273w7K1l80KJ9xaVStLhlvwHFXraq24HOm7+m5KHFt/2awVr1b3DgLRLU+8dy7P5a9oi1WFkGz9ZWty3JMkUZ+GbgZl2W/JnScJ2/fUQLL1l43tjgGd1GdFDbcuHKdQTQQ91RMaHHfqyUccW3/ZrFsxzO2VKHhbKe2dZ6RcB9IrAeHYA5DtGTCy/XKykSdC41XC6Hkon72yxOP/WSUwMDAwMDAwMDAwMDAwMPifeHbPtZ6AZ5dg9AQ8u+CnJ4xsKBjZUDCyoWBkQ8HIhoKRDQUjGwpGNhTg2W8L0hPw7HdT6YlnVxIMDAwMDAwMDAwMDAwMfmE8+y9G6Ql49t8n0xOmTImCkQ0FIxsKRjYUjGwoGNlQMLKhYGRDwciGgtleRgH+MEDg2ZUEAwMDAwMDAwMDAwMDg18YvxsgAL8ZIGDKlCgY2VAwsqFgZEPByIaCkQ0FIxsKRjYUjGwoGNlQMLKh8F/+Eo1YAc2lCAAAAABJRU5ErkJggg==`,
	},
];

const gameCurrencyData = [
	{
		text: "EU",
		value: 1,
		rate: 10,
		description: "World of Warcraft (EU)",
		selected: true,
	},
	{
		text: "DE",
		value: 2,
		rate: 15,
		description: "World of Warcraft (DE)",
		selected: false,
	},
];

let rateValue = 1;
let gameRateValue = 10;

const fractions = ["Alliance", "Horder"];

const currencyFromInput = $("#currency-from-input");
const currencyToInput = $("#currency-to-input");
const currencySlider = $("#currency-slider");
const server = $("#server");

function countFromInputValue() {
	currencyFromInput.val(
		(((gameRateValue / 100) * currencyToInput.val()) / rateValue).toFixed(2)
	);
}

function countToInputAndSliderValues() {
	let input = currencyToInput.val(
		gameRateValue * currencyFromInput.val() * rateValue
	);
	currencySlider.val(input.val());
}

// function changeToInput() {
// 	currencyToInput.val()
// 	return currencyToInput.val();
// }

// function changeSlider() {
// 	currencySlider.val(changeToInput());
// }

// const callbacks = $.Callbacks();
// callbacks.add(changeToInput);
// callbacks.add(changeSlider);
// callbacks.add(countFromInputValue);

function rateCurrency(data) {
	if (data.text === "EU" || data.text === "DE") {
		gameRateValue = data.rate;
		countFromInputValue();

		if (server.css("pointer-events") === "none") {
			server.focus().css({
				color: "#C0C3C9",
				"background-color": "#354051",
				"pointer-events": "initial",
			});
		}
	}
	if (data.text === "EUR" || data.text === "USD") {
		rateValue = data.rate;
		countFromInputValue();
	}
}

$("#demoDefaultSelection").ddslick({
	data: currencyData,
	width: 95,
	onSelected: function (data) {
		rateCurrency(data.selectedData);
	},
});

$("#demoDefaultSelection2").ddslick({
	data: gameCurrencyData,
	width: 95,
	onSelected: function (data) {
		rateCurrency(data.selectedData);
	},
	showSelectedHTML: false,
});

$(document).ready(function () {
	$(".games-field select").css({
		"background-color": "#2B3545",
		"pointer-events": "none",
	});
	$(".currency-from-container .dd-select").attr(
		"style",
		"background-color : #2B3545"
	);

	currencyFromInput
		.on("change currency from input value", function () {
			// .on("change numbers in input", function () {
			// 	if (this.value.match(/[^0-9]|^0{1}/g)) {
			// 		this.value = this.value.replace(/^0+/, "");
			// 	}
			// })
			// .on("keydown", function (event) {
			// 	// Разрешаем: backspace, delete, tab и escape
			// 	if (
			// 		event.keyCode == 46 ||
			// 		event.keyCode == 8 ||
			// 		event.keyCode == 9 ||
			// 		event.keyCode == 27 ||
			// 		// Разрешаем: Ctrl+A
			// 		(event.keyCode == 65 && event.ctrlKey === true) ||
			// 		// Разрешаем: home, end, влево, вправо
			// 		(event.keyCode >= 35 && event.keyCode <= 39)
			// 	) {
			// 		// Ничего не делаем
			// 		return;
			// 	} else {
			// 		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
			// 		if (
			// 			(event.keyCode < 48 || event.keyCode > 57) &&
			// 			(event.keyCode < 96 || event.keyCode > 105)
			// 		) {
			// 			event.preventDefault();
			// 		}
			// 	}

			countToInputAndSliderValues();
		})
		.focus(function () {
			if (
				$(".currency-from-container .dd-container").css("pointer-events") ===
				"none"
			) {
				$(".currency-from-container .dd-container").css(
					"pointer-events",
					"initial"
				);
				$(".currency-from-container .dd-select").css(
					"background-color",
					"initial"
				);
				$(".currency-from-container .dd-container").css("display", "initial");
			}
		});

	currencyToInput
		// .on("change numbers in input", function () {
		// 	if (this.value.match(/[^0-9]|^0{1}/g)) {
		// 		this.value = this.value.replace(/^0+/, "");
		// 	}
		// })
		// .on("keydown", function (event) {
		// 	// Разрешаем: backspace, delete, tab и escape
		// 	if (
		// 		event.keyCode == 46 ||
		// 		event.keyCode == 8 ||
		// 		event.keyCode == 9 ||
		// 		event.keyCode == 27 ||
		// 		// Разрешаем: Ctrl+A
		// 		(event.keyCode == 65 && event.ctrlKey === true) ||
		// 		// Разрешаем: home, end, влево, вправо
		// 		(event.keyCode >= 35 && event.keyCode <= 39)
		// 	) {
		// 		// Ничего не делаем
		// 		return;
		// 	} else {
		// 		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		// 		if (
		// 			(event.keyCode < 48 || event.keyCode > 57) &&
		// 			(event.keyCode < 96 || event.keyCode > 105)
		// 		) {
		// 			event.preventDefault();
		// 		}
		// 	}
		// })
		.on("change currency from input value", function () {
			countFromInputValue();
		})
		.focusout(function () {
			// Добавляем стили для активного поля ввода валюты
			currencyFromInput.css({ color: "#F6F6F6" }).removeAttr("disabled");
			$(".currency-from-container .dd-select").removeAttr(
				"style",
				"background-color"
			);
		});

	currencySlider.on("change currency to input value", function () {
		currencyToInput.val(this.value);
		countFromInputValue();
	});
	$("#server").change(function () {
		$("#faction")
			.focus()
			.css({
				color: "#C0C3C9",
				"background-color": "#354051",
				"pointer-events": "initial",
			})
			.change(function () {
				$(".currency-to-container img").attr(
					"src",
					"assets/images/game-icons_two-coins-active.svg"
				);
				// Добавляем стили для активного поля ввода игровой валюты и слайдера
				currencyToInput
					.css({ color: "#F6F6F6", "pointer-events": "initial" })
					.removeAttr("disabled");
				currencySlider.removeAttr("disabled");
				// Фокус на input для ввода игровой валюты
				currencyToInput.focus();
			});
	});
});
